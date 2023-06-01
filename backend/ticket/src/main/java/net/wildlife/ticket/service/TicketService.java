package net.wildlife.ticket.service;

import net.wildlife.ticket.dto.ResponseDto;
import net.wildlife.ticket.entity.Ticket;

public interface TicketService {
    Ticket saveTicket(Ticket ticket);

    void deleteTicket(Long ticketId);
    
	Ticket updateTicket(Ticket ticket);

	ResponseDto getTicketsForTourist(Long touristId);
}