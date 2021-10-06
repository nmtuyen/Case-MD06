package com.codegym.casemodule6.service.notification;

import com.codegym.casemodule6.model.entity.Notification;
import com.codegym.casemodule6.service.IGeneralService;

public interface INotificationService extends IGeneralService<Notification> {

    Iterable<Notification> findAllByUserId(Long id);

    Iterable<Notification> findAllByStatus0(Long id);
}
