package com.codegym.casemodule6.service.message;

import com.codegym.casemodule6.model.entity.Message;
import com.codegym.casemodule6.service.IGeneralService;

public interface IMessageService extends IGeneralService<Message> {
    Iterable<Message> findAllBySenderId(Long id);
    Iterable<Message> findAllByReceiverId(Long id);
    Iterable<Message> findAllByUser(Long id);
    Iterable<Message> findAllBySenderAndReceiver(Long id1, Long id2);
    Iterable<Message> findAllByReceiverIdAndStatus(Long id);
}
