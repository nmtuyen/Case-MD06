package com.codegym.casemodule6.repository;

import com.codegym.casemodule6.model.entity.Rent_Detail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface IRentDetailRepository extends JpaRepository<Rent_Detail,Long> {
    @Query("select r from Rent_Detail r where r.rent.id =:id")
    Iterable<Rent_Detail> findByRentId(Long id);
    @Query(value = "select * from case_module6.rent_Detail where rent_id =?" ,nativeQuery = true)
    Iterable<Rent_Detail> findByServiceId(Long id);

}
