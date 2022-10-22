package analisisclinicos.com.analisiclinicos.dao;

import analisisclinicos.com.analisiclinicos.models.Person;
import org.springframework.jdbc.core.RowCallbackHandler;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class PersonDTO implements RowMapper<Person> {
    @Override
    public Person mapRow(ResultSet rs, int rowNum) throws SQLException {
        Person person = new Person();
        person.setIdPerson(rs.getLong(1));
        person.setAge(rs.getString(2));
        person.setEmail(rs.getString(3));
        person.setLastName(rs.getString(4));
        person.setName(rs.getString(5));
        person.setPassword(rs.getString(6));
        person.setRoleId(rs.getLong(7));
        return person;
    }
}
