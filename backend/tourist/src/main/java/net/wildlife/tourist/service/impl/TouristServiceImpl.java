package net.wildlife.tourist.service.impl;



import lombok.extern.slf4j.Slf4j;
import net.wildlife.tourist.entity.Tourist;
import net.wildlife.tourist.repository.TouristRepository;
import net.wildlife.tourist.service.TouristService;

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
        return touristRepository.findById(touristId).get();
    }
}