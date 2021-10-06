package com.codegym.casemodule6.service.user_service;

import com.codegym.casemodule6.model.entity.User;
import com.codegym.casemodule6.model.entity.User_Service;
import com.codegym.casemodule6.service.IGeneralService;

public interface IUser_Service extends IGeneralService<User_Service> {
    Iterable<User_Service> findAllByUserId (Long id);
    Iterable<User> findAllVipUser();
}
