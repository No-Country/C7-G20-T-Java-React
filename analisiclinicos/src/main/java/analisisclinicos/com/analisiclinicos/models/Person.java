package analisisclinicos.com.analisiclinicos.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;

@Entity
@Table(name = "person")
@Getter
@Setter
public class Person implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_person", nullable = false, updatable = false)
    private Long idPerson;

    @Column(name = "role_id", nullable = false)
    @JsonProperty("role")
    private Long roleId;

    @Column(name = "name")
    @JsonProperty("firstName")
    private  String name;

    @Column(name = "last_name")
    @JsonProperty("lastName")
    private String lastName;

    @Column(name = "age")
    @JsonProperty("age")
    private String age;

    @Column(name = "email")
    @Email
    @JsonProperty("email")
    private String email;

    @Column(name = "password")
    @JsonProperty("password")
    private String password;

}
