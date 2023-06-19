package api.backend.dto.mapper;

import api.backend.dto.RoleResponseDto;
import api.backend.dto.UserRegisterDto;
import api.backend.dto.UserResponseDto;
import api.backend.model.User;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;
import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@Component
public class UserMapper {
    private final RoleMapper roleMapper;

    public UserResponseDto toDto(User user) {
        return new UserResponseDto(
                user.getId(),
                user.getEmail(),
                user.getUsername(),
                user.getRole().stream().map(roleMapper::toDto).toList());
    }

    public User toModel(UserRegisterDto dto) {
        User user = new User();
        user.setEmail(dto.email());
        user.setUsername(dto.username());
        user.setPassword(dto.password());
        user.setRole(new HashSet<>());
        return user;
    }
}
