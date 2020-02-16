package com.farouk.bengharssallah.react.backend.restcontroller;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.farouk.bengharssallah.react.backend.domain.ETF;
import com.farouk.bengharssallah.react.backend.model.DTETFDTO;
import com.farouk.bengharssallah.react.backend.model.IETFDTO;
import com.farouk.bengharssallah.react.backend.service.ETFService;

@CrossOrigin("*")
@RestController("/api")
public class RESTController {
	private ETFService etfService;
	private ModelMapper modelMapper;
	
	public RESTController(final ETFService etfService, final ModelMapper modelMapper) {
		       this.etfService = etfService;
		       this.modelMapper = modelMapper;
	      }

	@GetMapping(value = "/etfs/{country}")
	public ResponseEntity<List<DTETFDTO>> country(@PathVariable String country) {
		      
		      List<ETF> etfs = etfService.findByCountry(country);
		      System.out.println("Country " +  etfs.size());
		      if(etfs != null && etfs.size() > 0) return new ResponseEntity<>(mapAll(etfs, DTETFDTO.class), 
		    		   HttpStatus.OK);
		      else return new ResponseEntity<>(new ArrayList<DTETFDTO>(),HttpStatus.NOT_FOUND);
	   }
	
	
	@GetMapping(value = "/etf/{ticker}")
	public ResponseEntity<IETFDTO> ticker(@PathVariable String ticker) {
		       System.out.println("ticker " +  ticker);
		       ETF etf = etfService.findByTicker(ticker);
		      if(etf != null) return new ResponseEntity<>(map(etf, IETFDTO.class), 
		    		   HttpStatus.OK);
		      else return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
	    }
	
	
	@GetMapping(value = "/etfs")
	public ResponseEntity<List<DTETFDTO>> etfs() {
		      List<ETF> etfs = etfService.findAll();
		      if(etfs != null) return new ResponseEntity<>(mapAll(etfs, DTETFDTO.class), 
		    		   HttpStatus.OK);
		      else return new ResponseEntity<>(new ArrayList<DTETFDTO>(), HttpStatus.NOT_FOUND);
	    }
	
	
	   private  <D, T> D map(final T entity, Class<D> outClass) {
	        return modelMapper.map(entity, outClass);
	    }
	
	   private  <D, T> List<D> mapAll(final Collection<T> entityList, Class<D> outCLass) {
	        return entityList.stream().map(entity -> map(entity, outCLass))
	                .collect(Collectors.toList());
	    }
	
 }
