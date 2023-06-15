package api.backend.dto;

import api.backend.lib.FieldsValueMatch;
import api.backend.lib.ValidEmail;
import api.backend.lib.ValidPassword;
import api.backend.lib.ValidUsername;
import lombok.Getter;
import lombok.Setter;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Getter
@Setter
@FieldsValueMatch(
        field = "password",
        fieldMatch = "repeatPassword",
        message = "Passwords do not match!"
)
public class UserRegisterDto {
    @ValidEmail
    private String email;
    @Size(min = 3, max = 16)
    @ValidUsername
    private String username;
    @Size(min = 3, max = 16)
    @NotEmpty
    @ValidPassword
    private String password;
    private String repeatPassword;
}
