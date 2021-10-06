package com.codegym.casemodule6.service.user_service;

import com.codegym.casemodule6.model.entity.User;
import com.codegym.casemodule6.repository.IUserRepository;
import com.codegym.casemodule6.repository.IUserServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class User_Service implements IUser_Service{
    @Autowired
    private IUserServiceRepository userServiceRepository;
    @Autowired
    private IUserRepository userRepository;


    @Override
    public Iterable<com.codegym.casemodule6.model.entity.User_Service> findAll() {
        return userServiceRepository.findAll();
    }

    @Override
    public Optional<com.codegym.casemodule6.model.entity.User_Service> findById(Long id) {
        return userServiceRepository.findById(id);
    }

    @Override
    public com.codegym.casemodule6.model.entity.User_Service save(com.codegym.casemodule6.model.entity.User_Service user_service) {
        return userServiceRepository.save(user_service);
    }

    @Override
    public void remove(Long id) {
        userServiceRepository.deleteById(id);
    }

    @Override
    public Iterable<com.codegym.casemodule6.model.entity.User_Service> findAllByUserId(Long id) {
        return userServiceRepository.findAllByUserId(id);
    }

    @Override
    public Iterable<User> findAllVipUser() {
        return userRepository.findAllVipUser();
    }

}
