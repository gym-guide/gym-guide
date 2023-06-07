package api.backend.dto;


public record ExerciseResponseDetailViewDto(Long id,
                                            String title,
                                            String description,
                                            String category,
                                            String subCategory,
                                            String gifPath) {
}
