package net.wildlife.ticket.controller;

import net.wildlife.ticket.dto.ResponseDto;
import net.wildlife.ticket.entity.Ticket;
import net.wildlife.ticket.service.TicketService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/tickets")
@CrossOrigin(origins = "http://localhost:3000")
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

//    @GetMapping("{id}")
//    public ResponseEntity<ResponseDto> getTicket(@PathVariable("id") Long ticketId){
//        ResponseDto responseDto = ticketService.getTicket(ticketId);
//        return ResponseEntity.ok(responseDto);
//    }
	
    @PutMapping("{id}")
    public ResponseEntity<Ticket> updateTicket( @RequestBody Ticket ticket){
        Ticket updatedTicket = ticketService.updateTicket(ticket);
        return ResponseEntity.ok(updatedTicket);
    }
    
    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteTicket(@PathVariable("id") Long ticketId){
        ticketService.deleteTicket(ticketId);
        return ResponseEntity.noContent().build();
    }
    
    @GetMapping
    public ResponseEntity<ResponseDto> getTicketsForTourist(@RequestParam("touristId") Long touristId) {
        ResponseDto responseDto = ticketService.getTicketsForTourist(touristId);
        return ResponseEntity.ok(responseDto);
    }
}