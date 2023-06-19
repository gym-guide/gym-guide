package api.backend.lib;

import api.backend.service.UserService;
import lombok.AllArgsConstructor;
import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

@AllArgsConstructor
public class EmailValidator implements ConstraintValidator<ValidEmail, String>  {
    private static final String EMAIL_VALIDATION_REGEX =
            "^(?=.{1,64}@)[A-Za-z0-9_-]+(\\\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\\\.[A-Za-z0-9-]+)*(\\\\.[A-Za-z]{2,})$";
    private final UserService accountService;

    @Override
    public boolean isValid(String email, ConstraintValidatorContext constraintValidatorContext) {
        if (email == null) {
            return false;
        }
        boolean checker = accountService.findByEmail(email).isEmpty();
        return email.matches(EMAIL_VALIDATION_REGEX) && checker;
    }
}
