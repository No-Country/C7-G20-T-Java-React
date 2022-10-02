package analisisclinicos.com.analisiclinicos.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "doctor")
@Getter
@Setter
public class Doctor implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_doctor", nullable = false, updatable = false)
    private Long idDoctor;

    @Column(name = "id_person", nullable = false)
    private Long idPerson;

    @Column(name = "id_area", nullable = false)
    private Long idArea;

    @Column(name = "status")
    private String status;

}
