package analisisclinicos.com.analisiclinicos.dao.repository;

import analisisclinicos.com.analisiclinicos.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
