package net.wildlife.donation.controller;

import net.wildlife.donation.entity.Donation;
import net.wildlife.donation.service.DonationService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class DonationControllerTest {

    @Mock
    private DonationService donationService;

    private DonationController donationController;

    @BeforeEach
    void setup() {
        MockitoAnnotations.openMocks(this);
        donationController = new DonationController(donationService);
    }

    @Test
    void saveDonation_shouldReturnSavedDonation() {
        // Create a donation
        Donation donation = new Donation();
        donation.setDonorname("John Doe");
        donation.setDonationtype("Individual");
        donation.setDonationamount(100L);

        // Set up mock behavior
        when(donationService.saveDonation(donation)).thenReturn(donation);

        // Perform the request
        ResponseEntity<Donation> response = donationController.saveDonation(donation);

        // Verify the mock interactions
        verify(donationService, times(1)).saveDonation(donation);

        // Check the response
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(donation, response.getBody());
    }

    @Test
    void getDonationById_shouldReturnDonationById() {
        // Create a donation
        Donation donation = new Donation();
        donation.setId(1L);
        donation.setDonorname("John Doe");
        donation.setDonationtype("Individual");
        donation.setDonationamount(100L);

        // Set up mock behavior
        when(donationService.getDonationById(1L)).thenReturn(donation);

        // Perform the request
        ResponseEntity<Donation> response = donationController.getDonationById(1L);

        // Verify the mock interactions
        verify(donationService, times(1)).getDonationById(1L);

        // Check the response
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(donation, response.getBody());
    }

    @Test
    void getAllDonations_shouldReturnAllDonations() {
        // Create a list of donations
        List<Donation> donations = new ArrayList<>();
        Donation donation1 = new Donation();
        donation1.setId(1L);
        donation1.setDonorname("John Doe");
        donation1.setDonationtype("Individual");
        donation1.setDonationamount(100L);
        donations.add(donation1);
        Donation donation2 = new Donation();
        donation2.setId(2L);
        donation2.setDonorname("Jane Smith");
        donation2.setDonationtype("Organization");
        donation2.setDonationamount(200L);
        donations.add(donation2);

        // Set up mock behavior
        when(donationService.getAllDonations()).thenReturn(donations);

        // Perform the request
        ResponseEntity<List<Donation>> response = donationController.getAllDonations();

        // Verify the mock interactions
        verify(donationService, times(1)).getAllDonations();

        // Check the response
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(donations, response.getBody());
    }
}
