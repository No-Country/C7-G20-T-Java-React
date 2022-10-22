package analisisclinicos.com.analisiclinicos.dao.repository;

import analisisclinicos.com.analisiclinicos.models.Person;
import analisisclinicos.com.analisiclinicos.models.rest.request.LoginForm;

public interface IUserRepository {
    Integer addUser(Person person);

    Person findUser(LoginForm loginForm);
}
