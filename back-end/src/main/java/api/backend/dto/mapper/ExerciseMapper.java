package api.backend.dto.mapper;

import api.backend.dto.ExerciseResponseDetailViewDto;
import api.backend.dto.ExerciseResponsePreviewDto;
import api.backend.model.Exercise;
import org.springframework.stereotype.Component;

@Component
public class ExerciseMapper {
    public ExerciseResponseDetailViewDto toDetailViewDto(Exercise exercise) {
        return new ExerciseResponseDetailViewDto(
                exercise.getId(),
                exercise.getTitle(),
                exercise.getDescription(),
                exercise.getCategory().name(),
                exercise.getSubCategory().name(),
                exercise.getGifPath());
    }

    public ExerciseResponsePreviewDto toPreviewDto(Exercise exercise) {
        return new ExerciseResponsePreviewDto(
                exercise.getId(),
                exercise.getTitle(),
                exercise.getCategory().name(),
                exercise.getImagePath());
    }
}
