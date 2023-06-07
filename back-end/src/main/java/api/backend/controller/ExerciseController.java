package api.backend.controller;

import api.backend.dto.ExerciseResponseDetailViewDto;
import api.backend.dto.ExerciseResponsePreviewDto;
import api.backend.dto.mapper.ExerciseMapper;
import api.backend.service.ExerciseService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/exercises")
public class ExerciseController {
    private final ExerciseMapper mapper;
    private final ExerciseService service;

    public ExerciseController(ExerciseMapper mapper,
                              ExerciseService service) {
        this.mapper = mapper;
        this.service = service;
    }

    @GetMapping
    public List<ExerciseResponsePreviewDto> getAll() {
        return service.getAll().stream().map(mapper::toPreviewDto).toList();
    }

    @GetMapping("/{id}")
    public ExerciseResponseDetailViewDto getDetail(@PathVariable(name = "id") Long exerciseId) {
        return mapper.toDetailViewDto(service.getById(exerciseId));
    }
}
