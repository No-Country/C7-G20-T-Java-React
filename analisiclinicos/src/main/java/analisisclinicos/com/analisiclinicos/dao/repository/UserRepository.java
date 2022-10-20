package analisisclinicos.com.analisiclinicos.dao.repository;

import analisisclinicos.com.analisiclinicos.models.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepository implements IUserRepository{

    @Autowired
    @Qualifier("analisisClinicoJdbcTemplate")
    NamedParameterJdbcTemplate analisisClinicoJdbcTemplate;


    private static final String ADD_USER_ANALISIS_CLINICO = "INSERT INTO person (address, email, identification_number, last_name, name, password, role_id, status) " +
                                                            "VALUES (:address, :email, :identification, :lastName, :name, :password, :role, :status)";





    @Override
    public Integer addUser(Person person) {

        person.setAddress("addressTest");
        person.setIdPerson(12L);
        person.setRoleId(1L);
        person.setStatus("active");
        person.setIdentificationNumber("123");

        SqlParameterSource sqlParameterSource = new MapSqlParameterSource()
                .addValue("address",person.getAddress())
                .addValue("email", person.getEmail())
                .addValue("identification", person.getIdentificationNumber())
                .addValue("lastName",person.getLastName())
                .addValue("name", person.getName())
                .addValue("password", person.getPassword())
                .addValue("role", person.getRoleId())
                .addValue("status",person.getStatus());

        Integer rowsAffected = analisisClinicoJdbcTemplate.update(ADD_USER_ANALISIS_CLINICO, sqlParameterSource);

        return rowsAffected;
    }



}
