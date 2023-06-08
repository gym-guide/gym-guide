package api.backend.service;

import api.backend.model.Exercise;
import api.backend.repository.ExerciseRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@AllArgsConstructor
@Service
public class ExerciseServiceImpl implements ExerciseService {
    private final ExerciseRepository repository;

    @Override
    public Exercise save(Exercise exercise) {
        return repository.save(exercise);
    }

    @Override
    public Exercise getById(Long exerciseId) {
        return repository.findById(exerciseId).orElseThrow(
                () -> new RuntimeException("Can't find exercise with id: " + exerciseId));
    }

    @Override
    public List<Exercise> getAll() {
        return repository.findAll();
    }

    @Override
    public List<Exercise> getAllByCategory(String category) {
        return repository.findAllByCategory(Exercise.Category.valueOf(category.toUpperCase()));
    }

    @Override
    public List<Exercise> getAllBySubCategory(String subCategory) {
        return repository.findAllBySubCategory(Exercise.SubCategory.valueOf(subCategory.toUpperCase()));
    }

    @Override
    public Exercise findByTitle(String title) {
        return repository.findByTitle(title).orElseThrow(
                () -> new RuntimeException("Can't find exercise by title: " + title));
    }
}
