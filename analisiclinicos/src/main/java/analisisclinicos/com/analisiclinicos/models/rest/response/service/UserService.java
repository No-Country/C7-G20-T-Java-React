package analisisclinicos.com.analisiclinicos.models.rest.response.service;

import analisisclinicos.com.analisiclinicos.dao.repository.IUserRepository;
import analisisclinicos.com.analisiclinicos.models.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    IUserRepository userConfigRepository;

    public UserService() {
    }

    public UserService(IUserRepository userRepository) {
        this.userConfigRepository = userRepository;
    }
    public String addUser(Person person) {
        StringBuilder response = new StringBuilder();
        Integer completedUserAdd = userConfigRepository.addUser(person);
        response.append("Success..!")
                .append(completedUserAdd.toString())
                .append(person.getName())
                .append("was added correctly..!!!");

        return response.toString();

    }


}
