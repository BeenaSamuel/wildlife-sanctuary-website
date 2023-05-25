package net.wildlife.ticket.dto;




public class ResponseDto {
    private TouristDto tourist;
    private TicketDto ticket;
	public TouristDto getTourist() {
		return tourist;
	}
	public void setTourist(TouristDto tourist) {
		this.tourist = tourist;
	}
	public TicketDto getTicket() {
		return ticket;
	}
	public void setTicket(TicketDto ticket) {
		this.ticket = ticket;
	}
	public ResponseDto(TouristDto tourist, TicketDto ticket) {
		
		this.tourist = tourist;
		this.ticket = ticket;
	}
	public ResponseDto() {
		
	}
    
    
}