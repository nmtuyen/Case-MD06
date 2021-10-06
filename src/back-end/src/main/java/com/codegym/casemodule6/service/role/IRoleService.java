package com.codegym.casemodule6.service.role;

import com.codegym.casemodule6.model.entity.Role;
import com.codegym.casemodule6.service.IGeneralService;


import java.util.Optional;

public interface IRoleService extends IGeneralService<Role>  {
    Optional<Role> findByName(String name);
}
