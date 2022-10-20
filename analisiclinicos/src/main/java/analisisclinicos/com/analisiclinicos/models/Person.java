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
    private Long roleId;

    @Column(name = "identification_number", nullable = false)
    private String identificationNumber;

    @Column(name = "name")
    @JsonProperty("firstName")
    private  String name;

    @Column(name = "lastName")
    @JsonProperty("lastName")
    private String lastName;

    @Column(name = "address")
    private String address;

    @Column(name = "email")
    @Email
    @JsonProperty("email")
    private String email;

    @Column(name = "password")
    @JsonProperty("password")
    private String password;

    @Column(name = "status")
    private String status;

}
