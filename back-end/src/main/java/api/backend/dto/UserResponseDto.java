package api.backend.dto;

import java.util.List;

public record UserResponseDto (Long id,
                              String email,
                              String username,
                              List<RoleResponseDto> role) {
}
