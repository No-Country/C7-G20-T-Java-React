package analisisclinicos.com.analisiclinicos.dao.repository;

import analisisclinicos.com.analisiclinicos.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserCRUDRepository extends JpaRepository<User, Long> {
}
