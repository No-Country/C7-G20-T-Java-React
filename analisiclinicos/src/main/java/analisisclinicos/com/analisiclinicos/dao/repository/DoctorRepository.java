package analisisclinicos.com.analisiclinicos.dao.repository;

import analisisclinicos.com.analisiclinicos.models.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {
}
