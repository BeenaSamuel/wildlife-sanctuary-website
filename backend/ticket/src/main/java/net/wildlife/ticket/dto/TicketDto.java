package net.wildlife.ticket.dto;




public class TicketDto {
	 private Long id;
	    private String type;
	    private String ride;
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public String getType() {
			return type;
		}
		public void setType(String type) {
			this.type = type;
		}
		
		public TicketDto(Long id, String type, String ride) {
			super();
			this.id = id;
			this.type = type;
			this.ride = ride;
		}
		public String getRide() {
			return ride;
		}
		public void setRide(String ride) {
			this.ride = ride;
		}
		public TicketDto() {
			
		}
	   
	   
}