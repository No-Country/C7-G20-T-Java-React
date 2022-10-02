package analisisclinicos.com.analisiclinicos.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "laboratory")
@Getter
@Setter
public class Laboratory implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_laboratory", nullable = false)
    private Long idLaboratory;

    @Column(name = "name")
    private String name;

    @Column(name = "id_category")
    private Long idCategory;

    @Column(name = "status")
    private String status;

}
