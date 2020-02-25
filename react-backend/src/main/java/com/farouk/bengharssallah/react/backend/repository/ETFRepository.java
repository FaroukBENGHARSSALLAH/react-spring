package com.farouk.bengharssallah.react.backend.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.farouk.bengharssallah.react.backend.domain.ETF;

@Repository
public interface ETFRepository  extends MongoRepository<ETF, Long> {

	public ETF findByTicker(String ticker);
	
	public Page<ETF> findByCountry(String country, Pageable pageable);
}

