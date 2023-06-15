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
        UserResponseDto dto = new UserResponseDto();
        dto.setId(user.getId());
        dto.setEmail(user.getEmail());
        dto.setUsername(user.getUsername());
        List<RoleResponseDto> roles = user.getRole().stream()
                .map(roleMapper::toDto)
                .collect(Collectors.toList());
        dto.setRoles(roles);
        return dto;
    }

    public User toModel(UserRegisterDto dto) {
        User user = new User();
        user.setEmail(dto.getEmail());
        user.setUsername(dto.getUsername());
        user.setPassword(dto.getPassword());
        user.setRole(new HashSet<>());
        return user;
    }
}
