package api.backend.dto;

import lombok.Getter;
import lombok.Setter;
import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class UserLoginDto {
    @NotBlank(message = "Login can't be null or blank!")
    private String username;
    @NotBlank(message = "Password can't be null or blank!")
    private String password;
}
