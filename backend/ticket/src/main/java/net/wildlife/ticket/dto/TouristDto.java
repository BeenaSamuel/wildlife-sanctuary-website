package net.wildlife.ticket.dto;




public class TouristDto {
	private Long id;
    private String name;
    private String accessplace;
    private Long amount;
    private Long contact;
    private String prefferedlang;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAccessplace() {
		return accessplace;
	}
	public void setAccessplace(String accessplace) {
		this.accessplace = accessplace;
	}
	public Long getAmount() {
		return amount;
	}
	public void setAmount(Long amount) {
		this.amount = amount;
	}
	public Long getContact() {
		return contact;
	}
	public void setContact(Long contact) {
		this.contact = contact;
	}
	public String getPrefferedlang() {
		return prefferedlang;
	}
	public void setPrefferedlang(String prefferedlang) {
		this.prefferedlang = prefferedlang;
	}
	public TouristDto(Long id, String name, String accessplace, Long amount, Long contact, String prefferedlang) {
		
		this.id = id;
		this.name = name;
		this.accessplace = accessplace;
		this.amount = amount;
		this.contact = contact;
		this.prefferedlang = prefferedlang;
	}
	public TouristDto() {
		
	}
    
}