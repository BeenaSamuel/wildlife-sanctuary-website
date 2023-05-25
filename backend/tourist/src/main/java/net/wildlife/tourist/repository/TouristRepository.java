package net.wildlife.tourist.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import net.wildlife.tourist.entity.Tourist;

public interface TouristRepository extends JpaRepository<Tourist, Long> {
}