package api.backend.controller;

import api.backend.dto.UserLoginDto;
import api.backend.dto.UserRegisterDto;
import api.backend.dto.UserResponseDto;
import api.backend.dto.mapper.UserMapper;
import api.backend.model.User;
import api.backend.security.AuthenticationService;
import api.backend.security.JwtTokenProvider;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import javax.validation.Valid;
import java.util.Map;
import java.util.stream.Collectors;

@AllArgsConstructor
@RestController
public class AuthenticationController {
    private final AuthenticationService authenticationService;
    private final JwtTokenProvider provider;
    private final UserMapper userMapper;

    @PostMapping("/register")
    @ApiOperation(value = "registration new account for user")
    public UserResponseDto register(@RequestBody @Valid UserRegisterDto dto) {
        User user = authenticationService.register(dto.getEmail(), dto.getUsername(),
                dto.getPassword());
        return userMapper.toDto(user);
    }

    @PostMapping("/login")
    @ApiOperation(value = "login to account")
    public ResponseEntity<Object> login(@RequestBody @Valid UserLoginDto dto) {
        User user = authenticationService.login(dto.getUsername(), dto.getPassword());
        String token = provider.createToken(user.getUsername(), user.getRole().stream()
                .map(r -> r.getRoleName().name())
                .collect(Collectors.toList()));
        return new ResponseEntity<>(Map.of("token", token), HttpStatus.OK);
    }
}
