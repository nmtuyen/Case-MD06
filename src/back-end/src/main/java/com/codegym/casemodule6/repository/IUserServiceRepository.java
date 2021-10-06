package com.codegym.casemodule6.repository;

import com.codegym.casemodule6.model.entity.User_Service;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface IUserServiceRepository extends JpaRepository<User_Service, Long> {
    @Query("select us from User_Service us where us.user.id =:id")
    Iterable<User_Service> findAllByUserId (Long id);
}
