package api.backend.dto;

import api.backend.lib.FieldsValueMatch;
import api.backend.lib.ValidEmail;
import api.backend.lib.ValidPassword;
import api.backend.lib.ValidUsername;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@FieldsValueMatch(
        field = "password",
        fieldMatch = "repeatPassword",
        message = "Passwords do not match!"
)
public record UserRegisterDto (@ValidEmail
                               String email,
                               @Size(min = 3, max = 16) @ValidUsername
                               String username,
                               @Size(min = 3, max = 16) @NotEmpty @ValidPassword
                               String password,
                               String repeatPassword) {
}
