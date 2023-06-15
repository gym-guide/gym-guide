package api.backend.dto;

import lombok.Getter;
import lombok.Setter;
import java.util.List;

@Getter
@Setter
public class UserResponseDto {
    private Long id;
    private String email;
    private String username;
    private List<RoleResponseDto> roles;
}
