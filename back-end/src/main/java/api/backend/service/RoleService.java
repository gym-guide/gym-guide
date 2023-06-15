package api.backend.service;

import api.backend.model.Role;
import java.util.List;

public interface RoleService {
    Role save(Role role);

    Role getRoleByRoleName(Role.RoleName roleName);

    List<Role> findAll();
}
