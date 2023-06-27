package api.backend.controller;

import api.backend.dto.ExerciseResponseDetailViewDto;
import api.backend.dto.ExerciseResponsePreviewDto;
import api.backend.dto.mapper.ExerciseMapper;
import api.backend.service.ExerciseService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/exercises")
public class ExerciseController {
    private final ExerciseMapper mapper;
    private final ExerciseService service;

    @GetMapping
    @ApiOperation(value = "Getting all exercises")
    public List<ExerciseResponsePreviewDto> getAll() {
        return service.getAll().stream().map(mapper::toPreviewDto).toList();
    }

    @GetMapping("/{id}")
    @ApiOperation(value = "Getting detail information about needed exercises")
    public ExerciseResponseDetailViewDto getDetail(
            @PathVariable(name = "id")
            @ApiParam(value = "Id of exercise that you want to get")
            Long exerciseId) {
        return mapper.toDetailViewDto(service.getById(exerciseId));
    }

    @GetMapping("/category")
    @ApiOperation(value = "Getting all exercises by category")
    public List<ExerciseResponsePreviewDto> getAllByCategory(
            @RequestParam("cat")
            @ApiParam(value = "Category by which you want to sort")
            String category) {
        return service.getAllByCategory(category).stream().map(mapper::toPreviewDto).toList();
    }

    @GetMapping("/sub-category")
    @ApiOperation(value = "Getting all exercises by sub-category")
    public List<ExerciseResponsePreviewDto> getAllBySubCategory(
            @RequestParam("subCat")
            @ApiParam(value = "Sub-category by which you want to sort")
            String subCategory) {
        return service.getAllBySubCategory(subCategory).stream().map(mapper::toPreviewDto).toList();
    }

    @GetMapping("/title")
    @ApiOperation(value = "Getting all exercises by title")
    public List<ExerciseResponsePreviewDto> getByTitle(
            @RequestParam("title")
            @ApiParam(value = "Title by which you want to find exercise")
            String title) {
        return service.findByTitle(title).stream().map(mapper::toPreviewDto).toList();
    }
}
