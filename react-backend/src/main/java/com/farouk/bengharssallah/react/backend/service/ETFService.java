package com.farouk.bengharssallah.react.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.farouk.bengharssallah.react.backend.domain.ETF;
import com.farouk.bengharssallah.react.backend.repository.ETFRepository;

@Service
public class ETFService  {

	   private ETFRepository etfDao;
	   
	   public ETFService(final ETFRepository etfDao) {
		   this.etfDao  = etfDao;
	        }
	   
	   
	   public ETF findByTicker(String ticker) {
		   return etfDao.findByTicker(ticker);
	   }
	   
	   public List<ETF> findByCountry(String country) {
		   return etfDao.findByCountry(country);
	   }
	   
	   public List<ETF> findAll() {
		   return etfDao.findAll();
	   }
}

