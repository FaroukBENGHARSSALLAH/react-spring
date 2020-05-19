package com.farouk.bengharssallah.react.backend.restcontroller;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.farouk.bengharssallah.react.backend.domain.ETF;
import com.farouk.bengharssallah.react.backend.model.DTETFDTO;
import com.farouk.bengharssallah.react.backend.model.DTPageDTO;
import com.farouk.bengharssallah.react.backend.model.IETFDTO;
import com.farouk.bengharssallah.react.backend.service.ETFService;

@CrossOrigin("*")
@RestController("")
public class RESTController {
	private ETFService etfService;
	private ModelMapper modelMapper;
	
	public RESTController(final ETFService etfService, final ModelMapper modelMapper) {
		       this.etfService = etfService;
		       this.modelMapper = modelMapper;
	      }

	@GetMapping(value = "/etfs/{country}/{page}")
	public ResponseEntity<DTPageDTO> country(@PathVariable String country, @PathVariable int page) {
		System.out.println("page " +  page + " of country " + country);
		      Page<ETF> etfPage = etfService.findByCountry(country, new PageRequest(page, 5));
		      if(etfPage != null && etfPage.getContent().size() > 0) 
		    	  return new ResponseEntity<>(map(etfPage), 
		    		   HttpStatus.OK);
		      else return new ResponseEntity<>(new DTPageDTO(),HttpStatus.NOT_FOUND);
	   }
	
	
	@GetMapping(value = "/etf/{ticker}")
	public ResponseEntity<IETFDTO> ticker(@PathVariable String ticker) {
		       System.out.println("ticker " +  ticker);
		       ETF etf = etfService.findByTicker(ticker);
		      if(etf != null) return new ResponseEntity<>(map(etf), 
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
	
	
	 private DTPageDTO map(final Page<ETF> page) {
		        DTPageDTO dtoPage = new DTPageDTO();
		        dtoPage.setSize(new Long(page.getTotalElements()).intValue());
		        dtoPage.setPages(new Long(page.getTotalPages()).intValue());
		        dtoPage.setData(page.getContent().stream().map(entity -> map(entity, DTETFDTO.class))
		                .collect(Collectors.toList()));
	            return dtoPage;
	         }
	 
	    
	 private IETFDTO map(ETF etf) {
		 IETFDTO etfmp = map(etf, IETFDTO.class);
		 Random r = new Random();
		 etfmp.setDayFlow((float) ((-751) + (162.30  - (-751)) * r.nextFloat()));
		 etfmp.setWeekFlow((float) ((398.86) + (11572.03  - (398.86)) * r.nextFloat()));
		 etfmp.setYtdFlow((float) ((439.16) + (1582.75  - (439.16)) * r.nextFloat()));
		 etfmp.setY1Flow((float) ((-1316) + (2757.20  - (-1316)) * r.nextFloat()));
		 etfmp.setY3Flow((float) ((-2231.13) + (2877.76  - (-2231.13)) * r.nextFloat()));
         return etfmp;
      }
	
	
	   private  <D, T> D map(final T entity, Class<D> outClass) {
	        return modelMapper.map(entity, outClass);
	    }
	
	   private  <D, T> List<D> mapAll(final Collection<T> entityList, Class<D> outCLass) {
	        return entityList.stream().map(entity -> map(entity, outCLass))
	                .collect(Collectors.toList());
	    }
	
 }
