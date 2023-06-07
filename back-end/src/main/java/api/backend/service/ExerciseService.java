package api.backend.service;

import api.backend.model.Exercise;
import java.util.List;

public interface ExerciseService {
    Exercise save(Exercise exercise);
    Exercise getById(Long exerciseId);
    List<Exercise> getAll();
}
