package analisisclinicos.com.analisiclinicos.dao.repository;

import analisisclinicos.com.analisiclinicos.dao.PersonDTO;
import analisisclinicos.com.analisiclinicos.models.Person;
import analisisclinicos.com.analisiclinicos.models.rest.request.LoginForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserRepository implements IUserRepository{

    @Autowired
    @Qualifier("analisisClinicoJdbcTemplate")
    NamedParameterJdbcTemplate analisisClinicoJdbcTemplate;


    private static final String ADD_USER_ANALISIS_CLINICO = "INSERT INTO person (role_id, name, last_name, age, email, password) " +
                                                            "VALUES (:role, :name, :lastName, :age, :email, :password)";

    private  static final String FIND_USER_ANALISIS_CLINICO = "SELECT * FROM person WHERE email = :EMAIL AND password = :PASSWORD";





    @Override
    public Integer addUser(Person person) {
        SqlParameterSource sqlParameterSource = new MapSqlParameterSource()
                .addValue("role", person.getRoleId())
                .addValue("name",person.getName())
                .addValue("lastName", person.getLastName())
                .addValue("age", person.getAge())
                .addValue("email", person.getEmail())
                .addValue("password", person.getPassword());

        Integer rowsAffected = analisisClinicoJdbcTemplate.update(ADD_USER_ANALISIS_CLINICO, sqlParameterSource);

        return rowsAffected;
    }

    @Override
    public Person findUser(LoginForm loginForm) {
        SqlParameterSource sqlParameterSource = new MapSqlParameterSource()
                .addValue("EMAIL",loginForm.getEmail())
                .addValue("PASSWORD",loginForm.getPassword());

       List<Person> person = analisisClinicoJdbcTemplate.query(FIND_USER_ANALISIS_CLINICO,sqlParameterSource,(RowMapper) new PersonDTO());
        Person user = new Person();
       if(!person.isEmpty()){
           for (Person userObject : person){
               user.setEmail(userObject.getEmail());
               user.setPassword(userObject.getPassword());
               user.setName(userObject.getName());
               user.setAge(userObject.getAge());
               user.setLastName(userObject.getLastName());
               user.setIdPerson(userObject.getIdPerson());
               user.setRoleId(userObject.getRoleId());
           }
       }

        return user;
    }


}
