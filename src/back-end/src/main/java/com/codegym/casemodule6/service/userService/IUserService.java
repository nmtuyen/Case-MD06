package com.codegym.casemodule6.service.userService;

import com.codegym.casemodule6.model.entity.User;
import com.codegym.casemodule6.service.IGeneralService;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.Optional;

public interface IUserService extends IGeneralService<User>, UserDetailsService {
    Optional<User> findByUserName(String username);
    Optional<User> findUserByEmail(String email);
    Boolean existsByEmail(String email);
    Boolean existsByUserName(String username);
    Iterable<User> findAllByStatusCCDV();
    Optional<User> findCCDVById(Long id);
    Iterable<User> find12NewCCDV();
    Iterable<User> findAllByAge(int age1, int age2);

    Iterable<User> findAllByNameContaining(String username);

    Iterable<User> findAllByGenderContaining(String gender);

    Iterable<User> findAllByCityContaining(String city);

    Iterable<User> findUserByMessage(Long id);

    Iterable<User> findAllByStatus3();
   Iterable<User> findAllByStatusSDDV();

}
