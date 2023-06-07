package api.backend.model;

import lombok.*;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity(name = "exercises")
public class Exercise {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Include
    private Long id;
    @Column(name = "title")
    private String title;
    @Column(name = "description")
    private String description;
    @Column(name = "category")
    @Enumerated(value = EnumType.STRING)
    private Category category;
    @Column(name = "sub_category")
    @Enumerated(value = EnumType.STRING)
    private SubCategory subCategory;
    @Column(name = "image_path")
    private String imagePath;
    @Column(name = "gif_path")
    private String gifPath;

    public enum Category {
        FRONT("Front"),
        BACK("Back"),
        HANDS("Hands"),
        LEGS("Legs"),
        OTHER("Other");
        private String value;

        Category(String value) {
            this.value = value;
        }
    }

    public enum SubCategory {
        CHEST("Chest"),
        PRESS("Press"),
        UPPER_BACK("Upper_Back"),
        MIDDLE_BACK("Middle_Back"),
        LOWER_BACK("Lower_Back"),
        TRICEPS("Triceps"),
        BICEPS("Biceps"),
        QUADRICEPS("Quadriceps"),
        HAMSTRINGS("Hamstrings"),
        GLUTES("Glutes"),
        CALVES("Calves"),
        NECK("Neck"),
        SHOULDERS("Shoulders");

        private String value;

        SubCategory(String value) {
            this.value = value;
        }
    }
}
