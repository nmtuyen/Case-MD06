package com.codegym.casemodule6.repository;

import com.codegym.casemodule6.model.entity.Rent;


import com.codegym.casemodule6.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface IRentRepository extends JpaRepository<Rent, Long> {

    @Query("select r from Rent r where r.user.id =:id")
    Iterable<Rent> findByUserId(Long id);

    @Query("select r from Rent r where r.userRent.id =:id")
    Iterable<Rent> findByUserRentId(Long id);

    @Query(value = "SELECT *, COUNT(*) AS Soluong FROM case_module6.rent where rent.status = 3 GROUP BY rent.user_ccdv order by Soluong desc limit 6", nativeQuery = true)
    Iterable<Rent> top6UserCCDV();
}
