package com.farouk.bengharssallah.react.backend.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
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
	   
	   public Page<ETF> findByCountry(String country, PageRequest pageResquest) {
		   return etfDao.findByCountry(country, pageResquest);
	   }
	   
	   public List<ETF> findAll() {
		   return etfDao.findAll();
	   }
}

