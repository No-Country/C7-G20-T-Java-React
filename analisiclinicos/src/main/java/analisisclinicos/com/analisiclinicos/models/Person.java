package analisisclinicos.com.analisiclinicos.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import javax.validation.constraints.Email;

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
    private  String name;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "address")
    private String address;

    @Column(name = "email")
    @Email
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "status")
    private String status;

}
