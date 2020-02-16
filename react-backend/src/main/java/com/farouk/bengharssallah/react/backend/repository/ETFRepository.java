package com.farouk.bengharssallah.react.backend.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.farouk.bengharssallah.react.backend.domain.ETF;

@Repository
public interface ETFRepository  extends MongoRepository<ETF, Long> {

	public ETF findByTicker(String ticker);
	
	public List<ETF> findByCountry(String country);
}

