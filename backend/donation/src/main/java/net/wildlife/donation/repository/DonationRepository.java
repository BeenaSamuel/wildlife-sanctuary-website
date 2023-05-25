package net.wildlife.donation.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import net.wildlife.donation.entity.Donation;

public interface DonationRepository extends JpaRepository<Donation, Long> {
}