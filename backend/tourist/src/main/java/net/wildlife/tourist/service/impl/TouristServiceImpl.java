package net.wildlife.tourist.service.impl;
import java.util.Optional;




import lombok.extern.slf4j.Slf4j;
import net.wildlife.tourist.entity.Tourist;

import net.wildlife.tourist.repository.TouristRepository;
import net.wildlife.tourist.service.TouristService;

import java.util.List;
import java.util.NoSuchElementException;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service

@Slf4j
public class TouristServiceImpl implements TouristService {

	@Resource
	private TouristRepository touristRepository;

    
   

    public TouristServiceImpl(TouristRepository touristRepository) {
		
		this.touristRepository = touristRepository;
	}

	@Transactional
	@Override
    public Tourist saveTourist(Tourist tourist) {
        return touristRepository.save(tourist);
    }

	@Transactional
	@Override
	public Tourist getTouristById(Long touristId) {
	    Optional<Tourist> optionalTourist = touristRepository.findById(touristId);
	    if (optionalTourist.isPresent()) {
	        return optionalTourist.get();
	    } else {
	        // Handle the case when the Tourist with the given ID does not exist
	        throw new NoSuchElementException("Tourist not found with ID: " + touristId);
	    }
	}

    
	@Override
	public List<Tourist> getAllTourists() {
	    return touristRepository.findAll();
	}

    @Override
    public Tourist getTouristByNameAndPassword(String name, String password) {
        return touristRepository.findByNameAndPassword(name, password);
    }

}