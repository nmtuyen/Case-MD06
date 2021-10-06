package com.codegym.casemodule6.service.rent;

import com.codegym.casemodule6.model.entity.Rent;

import com.codegym.casemodule6.model.entity.User;
import com.codegym.casemodule6.service.IGeneralService;

public interface IRentService extends IGeneralService<Rent> {
    Iterable<Rent> findByUserId(Long id);
    Iterable<Rent> findByUserRentId(Long id);
    Iterable<Rent> top6UserCCDV();

}
