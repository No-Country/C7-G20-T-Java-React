package analisisclinicos.com.analisiclinicos.controller;
import analisisclinicos.com.analisiclinicos.common.exception.rest.BadRequestException;
import analisisclinicos.com.analisiclinicos.models.Person;
import analisisclinicos.com.analisiclinicos.models.rest.request.LoginForm;
import analisisclinicos.com.analisiclinicos.models.rest.response.DetailResponse;
import analisisclinicos.com.analisiclinicos.models.rest.response.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.print.attribute.standard.Media;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/v1/user")
public class UserController {

    @Autowired
    UserService userService;


    @PostMapping(value = "/login", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity loginUser (HttpServletResponse httpServletResponse, @RequestBody LoginForm loginForm) throws BadRequestException {

        Person user = userService.findUser(loginForm);
        if(user.getEmail() !=null){
            DetailResponse<Person> response = new DetailResponse<>(user,"s-200");
            return new ResponseEntity<>(response, new HttpHeaders(), HttpStatus.OK);
        }else {
            HashMap<String, String> response = new HashMap<>();
            response.put("User not registry, please add the user ",loginForm.getEmail());
            return new ResponseEntity<>(response,new HttpHeaders(), HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping(value = "/addUser", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity addUser(HttpServletResponse httpServletResponse, @RequestBody Person person) throws BadRequestException {

        String messageToSend = userService.addUser(person);
        System.out.println("Person --> " + person.getName() + " " + person.getEmail() + " " + person.getLastName() + " " +person.getPassword());

        HashMap<String, String> responseBody = new HashMap<>();
        responseBody.put("User was added successfully ...!", messageToSend);
        DetailResponse<HashMap> response = new DetailResponse<>(responseBody,"S-200");
        return new ResponseEntity<>(response, new HttpHeaders(), HttpStatus.OK);
    }


}
