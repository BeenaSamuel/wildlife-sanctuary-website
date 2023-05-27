package net.wildlife.tourist.entity;

import javax.persistence.*;

@Entity
@Table(name = "tourists")

public class Tourist {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String password;
   
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
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public void setPrefferedlang(String prefferedlang) {
		this.prefferedlang = prefferedlang;
	}
	
	public Tourist(Long id, String name, String password, String accessplace, Long amount, Long contact,
			String prefferedlang) {
		super();
		this.id = id;
		this.name = name;
		this.password = password;
		
		this.amount = amount;
		this.contact = contact;
		this.prefferedlang = prefferedlang;
	}
	public Tourist() {
		
	}
    
}