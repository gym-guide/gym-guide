package api.backend.dto;

import api.backend.lib.FieldsValueMatch;
import api.backend.lib.ValidEmail;
import api.backend.lib.ValidUsername;

import javax.validation.constraints.Size;

@FieldsValueMatch(
        field = "password",
        fieldMatch = "repeatPassword"
)
public record UserRegisterDto (@ValidEmail
                               String email,
                               @Size(min = 4, max = 16, message = "Must contains 4 - 16 symbols")
                               @ValidUsername
                               String username,
                               @Size(min = 4, max = 16, message = "Must contains 4 - 16 symbols")
                               String password,
                               String repeatPassword) {
}
