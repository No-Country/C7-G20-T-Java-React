package analisisclinicos.com.analisiclinicos.dao.repository;

import analisisclinicos.com.analisiclinicos.models.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepository extends JpaRepository<Patient, Long> {
}
