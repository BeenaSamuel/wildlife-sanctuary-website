package net.wildlife.ticket.controller;

import net.wildlife.ticket.dto.ResponseDto;
import net.wildlife.ticket.entity.Ticket;
import net.wildlife.ticket.service.TicketService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/tickets")

public class TicketController {

    private TicketService ticketService;
    
    

    public TicketController(TicketService ticketService) {
		super();
		this.ticketService = ticketService;
	}

	@PostMapping
    public ResponseEntity<Ticket> saveTicket(@RequestBody Ticket ticket){
        Ticket savedTicket = ticketService.saveTicket(ticket);
        return new ResponseEntity<>(savedTicket, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<ResponseDto> getTicket(@PathVariable("id") Long ticketId){
        ResponseDto responseDto = ticketService.getTicket(ticketId);
        return ResponseEntity.ok(responseDto);
    }
}