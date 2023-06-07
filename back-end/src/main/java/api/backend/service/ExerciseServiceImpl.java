package api.backend.service;

import api.backend.model.Exercise;
import api.backend.repository.ExerciseRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ExerciseServiceImpl implements ExerciseService {
    private final ExerciseRepository repository;

    public ExerciseServiceImpl(ExerciseRepository repository) {
        this.repository = repository;
    }

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
}
