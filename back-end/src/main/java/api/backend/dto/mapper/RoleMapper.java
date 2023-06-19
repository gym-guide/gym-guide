package api.backend.dto.mapper;

import api.backend.dto.RoleResponseDto;
import api.backend.model.Role;
import org.springframework.stereotype.Component;

@Component
public class RoleMapper {

    public RoleResponseDto toDto(Role role) {
        return new RoleResponseDto(
                role.getId(),
                role.getRoleName().name());
    }
}
