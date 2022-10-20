package analisisclinicos.com.analisiclinicos.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="user")
@Getter
@Setter
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_user", nullable = false, updatable = false)
    private Long idUser;

    @Column(name = "id_person", nullable = false)
    private Long idPerson;

    @Column(name = "status", nullable = false)
    private String status;
}
