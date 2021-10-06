package com.codegym.casemodule6.repository;

import com.codegym.casemodule6.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IUserRepository extends JpaRepository<User, Long> {
    Optional<User> findUserByUserName(String username);

    Optional<User> findUserByEmail(String email);

    Boolean existsByEmail(String email);

    Boolean existsByUserName(String username);

    @Query("select us from User us where us.statusCCDV =1 or us.statusCCDV =2")
    Iterable<User> findAllByStatusCCDV();

    @Query("select us from User us where us.statusCCDV =1 and us.id= :id")
    Optional<User> findCCDVById(Long id);

    @Query(value = "select * from case_module6.user where (statusccdv = 1 or statusccdv = 2) order by create_atccdv desc limit 12", nativeQuery = true)
    Iterable<User> find12NewCCDV();

    @Query("select us from User us where (us.statusCCDV =1 or us.statusCCDV = 2) and us.name like ?1")
    Iterable<User> findAllByNameContaining(String name);

    @Query("select us from User us where (us.statusCCDV = 1 or us.statusCCDV = 2) and us.gender like ?1")
    Iterable<User> findAllByGenderContaining(String gender);

    @Query("select us from User us where (us.statusCCDV =1 or us.statusCCDV = 2) and us.city= :city")
    Iterable<User> findAllByCityContaining(String city);

    @Query(value = "Select * from case_module6.user where DATEDIFF(current_date(), date_of_birth)/365 between :age1 and :age2 and (statusccdv = 1 or statusccdv = 2)", nativeQuery = true)

    Iterable<User> findAllByAge(int age1, int age2);

    @Query(value = "select * from case_module6.user where user.id in (select case_module6.message.sender_id from case_module6.message where message.receiver_id=?1) or user.id in (select message.receiver_id from case_module6.message where message.sender_id=?1)", nativeQuery = true)
    Iterable<User> findUserByMessage(Long id);

    @Query("select us from User us where us.statusCCDV =3")
    Iterable<User> findAllByStatus3();

    @Query("select us from User us where us.statusUs =2 and (us.statusCCDV = 2 or us.statusCCDV =1)")
    Iterable<User> findAllVipUser();

    @Query("select us from User us where us.statusCCDV =0")
    Iterable<User> findAllByUserSDDV();




}