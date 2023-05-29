package net.wildlife.donation.service.impl;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;
import org.junit.Assert;
import java.util.List;
import java.util.Optional;

import net.wildlife.donation.entity.Donation;
import net.wildlife.donation.repository.DonationRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
@Transactional
public class DonationServiceImplTest {

    @Mock
    private DonationRepository donationRepository;

    @InjectMocks
    private DonationServiceImpl donationService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }
   
    @Test
    public void testGetDonationById() {
        // Arrange
        Long donationId = 1L;
        Donation donation = new Donation();
        donation.setId(donationId);
        // You can set other properties of the donation object as needed

        
        when(donationRepository.findById(donationId)).thenReturn(Optional.of(donation));

        // Act
        Donation retrievedDonation = donationService.getDonationById(donationId);

        // Assert
        verify(donationRepository, times(1)).findById(donationId);
        assertEquals(donation, retrievedDonation);
    }
    @Test
	public void saveDonation() {

    	   Donation donation = new Donation();
           donation.setId(1L);
           donation.setDonationamount(2000L);
           donation.setDonorname("riya");
           donation.setDonationtype("individual");
           

		
		
		donationService.saveDonation(donation);
		verify(donationRepository, times(1)).save(donation);
	}
 
    
    @Test
	public void getAllDonations() {

    	List<Donation> donations = donationRepository.findAll();
    	 verify(donationRepository, times(1)).findAll();
		//Assert.assertEquals(donations.size(), 1);
	

	}
    
}
