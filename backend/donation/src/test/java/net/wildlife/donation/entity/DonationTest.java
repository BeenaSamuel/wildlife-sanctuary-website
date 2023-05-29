package net.wildlife.donation.entity;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import net.wildlife.donation.entity.Donation;

public class DonationTest {

    @Test
    public void testGettersAndSetters() {
        // Create a donation object
        Donation donation = new Donation();

        // Set values using setters
        donation.setId(1L);
        donation.setDonorname("John Doe");
        donation.setDonationtype("Individual");
        donation.setDonationamount(100L);

        // Assert the values using getters
        Assertions.assertEquals(1L, donation.getId());
        Assertions.assertEquals("John Doe", donation.getDonorname());
        Assertions.assertEquals("Individual", donation.getDonationtype());
        Assertions.assertEquals(100L, donation.getDonationamount());
    }

    @Test
    public void testConstructor() {
        // Create a donation object using the constructor
        Donation donation = new Donation(1L, "John Doe", "Individual", 100L);

        // Assert the values using getters
        Assertions.assertEquals(1L, donation.getId());
        Assertions.assertEquals("John Doe", donation.getDonorname());
        Assertions.assertEquals("Individual", donation.getDonationtype());
        Assertions.assertEquals(100L, donation.getDonationamount());
    }
}
