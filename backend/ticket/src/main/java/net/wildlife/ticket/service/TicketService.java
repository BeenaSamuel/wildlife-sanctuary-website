package net.wildlife.ticket.service;

import net.wildlife.ticket.dto.ResponseDto;
import net.wildlife.ticket.entity.Ticket;

public interface TicketService {
    Ticket saveTicket(Ticket ticket);

    ResponseDto getTicket(Long ticketId);
}