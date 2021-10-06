package com.codegym.casemodule6.service.userService;

import com.codegym.casemodule6.model.entity.User;
import com.codegym.casemodule6.repository.IUserRepository;
import com.codegym.casemodule6.security.userprincal.UserPrinciple;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService implements IUserService{
    @Autowired
    private IUserRepository iUserRepository;

    @Override
    public Iterable<User> findAll() {
        return iUserRepository.findAll();
    }
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
    public Optional<User> findById(Long id) {
        return iUserRepository.findById(id);
    }

    @Override
    public User save(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return iUserRepository.save(user);
    }

    @Override
    public void remove(Long id) {
        iUserRepository.deleteById(id);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> userOptional = iUserRepository.findUserByUserName(username);
        if (!userOptional.isPresent()){
            throw new UsernameNotFoundException(username);
        }
        return UserPrinciple.build(userOptional.get());
    }


    @Override
    public Optional<User> findByUserName(String username) {
        return iUserRepository.findUserByUserName(username);
    }

    @Override
    public Optional<User> findUserByEmail(String email) {
        return iUserRepository.findUserByEmail(email);
    }

    @Override
    public Boolean existsByEmail(String email) {
      return iUserRepository.existsByEmail(email);
    }

    @Override
    public Boolean existsByUserName(String username) {
        return iUserRepository.existsByUserName(username);
    }

    @Override
    public Iterable<User> findAllByStatusCCDV() {
        return iUserRepository.findAllByStatusCCDV();
    }

    @Override
    public Optional<User> findCCDVById(Long id) {
        return iUserRepository.findCCDVById(id);
    }

    @Override
    public Iterable<User> find12NewCCDV() {
        return iUserRepository.find12NewCCDV();
    }

    @Override
    public Iterable<User> findAllByAge(int age1, int age2) {
        return iUserRepository.findAllByAge(age1, age2);
    }

    @Override
    public Iterable<User> findAllByNameContaining(String username) {
        return iUserRepository.findAllByNameContaining(username);
    }

    @Override
    public Iterable<User> findAllByGenderContaining(String gender) {
        return iUserRepository.findAllByGenderContaining(gender);
    }

    @Override
    public Iterable<User> findAllByCityContaining(String city) {
        return iUserRepository.findAllByCityContaining(city);
    }

    @Override
    public Iterable<User> findUserByMessage(Long id) {
        return iUserRepository.findUserByMessage(id);
    }

    @Override
    public Iterable<User> findAllByStatus3() {
        return iUserRepository.findAllByStatus3();
    }

    @Override
    public Iterable<User> findAllByStatusSDDV() {
        return iUserRepository.findAllByUserSDDV();
    }


}
