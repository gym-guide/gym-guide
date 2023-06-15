package api.backend.lib;

import api.backend.service.UserService;
import lombok.AllArgsConstructor;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

@AllArgsConstructor
public class UsernameValidator implements ConstraintValidator<ValidUsername, String> {
    private static final String LOGIN_VALIDATION_REGEX = "^[A-Za-z]$";
    private final UserService accountService;

    @Override
    public boolean isValid(String username, ConstraintValidatorContext constraintValidatorContext) {
        if (username == null) {
            return false;
        }
        boolean checker = accountService.findByUsername(username).isEmpty();
        return username.matches(LOGIN_VALIDATION_REGEX) && checker;
    }
}
