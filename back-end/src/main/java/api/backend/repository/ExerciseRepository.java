package api.backend.repository;

import api.backend.model.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface ExerciseRepository extends JpaRepository<Exercise, Long> {
    List<Exercise> findAllByCategory(Exercise.Category category);
    List<Exercise> findAllBySubCategory(Exercise.SubCategory subCategory);
    Optional<Exercise> findByTitle(String title);
}
