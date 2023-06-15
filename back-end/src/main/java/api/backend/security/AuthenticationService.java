package api.backend.security;

import api.backend.model.User;

public interface AuthenticationService {
    User register(String email, String username, String password);

    User login(String username, String password);
}
