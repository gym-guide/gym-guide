package api.backend.dto.mapper;

import api.backend.dto.RoleResponseDto;
import api.backend.model.Role;
import org.springframework.stereotype.Component;

@Component
public class RoleMapper {

    public RoleResponseDto toDto(Role role) {
        RoleResponseDto dto = new RoleResponseDto();
        dto.setId(role.getId());
        dto.setName(role.getRoleName().name());
        return dto;
    }
}
