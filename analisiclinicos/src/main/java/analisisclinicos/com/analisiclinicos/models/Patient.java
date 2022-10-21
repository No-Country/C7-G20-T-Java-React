package analisisclinicos.com.analisiclinicos.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "patient")
@Getter
@Setter
public class Patient implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_patient", nullable = false, updatable = false)
    private Long idPatient;

    @Column(name = "id_person", nullable = false)
    private Long idPerson;

    @Column(name = "id_laboratory", nullable = false)
    private Long idLaboratory;

    @Column(name = "id_doctor", nullable = false)
    private Long idDoctor;

    @Column(name = "status")
    private String status;
}
