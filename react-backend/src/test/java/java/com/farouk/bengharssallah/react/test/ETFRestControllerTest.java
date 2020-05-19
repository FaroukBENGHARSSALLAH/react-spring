package com.farouk.bengharssallah.react.test;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.junit.Test;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;

import com.farouk.bengharssallah.react.backend.domain.ETF;
import com.farouk.bengharssallah.react.backend.model.IETFDTO;

import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.notNullValue;
import static org.hamcrest.Matchers.hasSize;
import static org.mockito.Mockito.when;
import static org.springframework.http.MediaType.APPLICATION_JSON_UTF8;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class ETFRestControllerTest extends AbstractRestControllerTest {

	
	@Test
	public void shouldReturnFoundALLETFs() throws Exception {
		   // given
	     ETF etf1 = getETF("ticker");
	     ETF etf2 = getETF("symbol");
	     

		  // when
		when(etfService.findAll()).thenReturn(Arrays.asList(etf1, etf2));
		
		
		
		// then
		mockMvc.perform(get("/etfs").accept(APPLICATION_JSON_UTF8))
				.andExpect(status().isOk())
				.andExpect(content().contentType(APPLICATION_JSON_UTF8))
				.andExpect(jsonPath("$",  hasSize(2)))
				.andExpect(jsonPath("$[0].ticker", is("ticker")))
				.andExpect(jsonPath("$[0].name", is("name")))
				.andExpect(jsonPath("$[0].exchange", is("exchange")));

	}
	
	
	@Test
	public void shouldReturnFoundETFPage() throws Exception {
		   // given
	     ETF etf1 = getETF("ticker");
	     ETF etf2 = getETF("symbol");
	     

		  // when
		when(etfService.findByCountry("country", PageRequest.of(0, 5)))
		       .thenReturn(new PageImpl(Arrays.asList(etf1, etf2), PageRequest.of(0, 5), 2));
		
	
		// then
		mockMvc.perform(get("/etfs/country/0").accept(APPLICATION_JSON_UTF8))
				.andExpect(status().isOk())
				.andExpect(content().contentType(APPLICATION_JSON_UTF8))
				.andExpect(jsonPath("$.size", is(2)))
				.andExpect(jsonPath("$.pages", is(1)))
				.andExpect(jsonPath("$.pages", is(1)))
				.andExpect(jsonPath("$.data",  hasSize(2)))
				.andExpect(jsonPath("$.data[0].ticker", is("ticker")))
				.andExpect(jsonPath("$.data[0].name", is("name")))
				.andExpect(jsonPath("$.data[0].exchange", is("exchange")));

	}
	
	
	
	
	@Test
	public void shouldReturnFoundETF() throws Exception {
		// given
		ETF etf = getETF("ticker");

		// when
		when(etfService.findByTicker("ticker")).thenReturn(etf);
		
		// then
		mockMvc.perform(get("/etf/ticker").accept(APPLICATION_JSON_UTF8))
				.andExpect(status().isOk())
				.andExpect(content().contentType(APPLICATION_JSON_UTF8))
				.andExpect(jsonPath("$.ticker", is("ticker")))
				.andExpect(jsonPath("$.name", is("name")))
				.andExpect(jsonPath("$.exchange", is("exchange")))
				.andExpect(jsonPath("$.country", is("country")))
				.andExpect(jsonPath("$.dayFlow", notNullValue()))
				.andExpect(jsonPath("$.weekFlow", notNullValue()))
				.andExpect(jsonPath("$.ytdFlow", notNullValue()))
				.andExpect(jsonPath("$.y1Flow", notNullValue()))
				.andExpect(jsonPath("$.y3Flow", notNullValue()));

	}
	
	
	
	private ETF getETF(String symbol) {
		ETF etf  = new ETF();
		etf.setId(1L);
		etf.setTicker(symbol);
		etf.setName("name");
		etf.setExchange("exchange");
		etf.setCountry("country");
		return etf;
	       }
	
	
	private IETFDTO getETFDTO(String symbol) {
						IETFDTO etf = new IETFDTO();
						etf.setTicker(symbol);
						etf.setName("name");
						etf.setExchange("exchange");
						etf.setCountry("country");
						etf.setDayFlow(0.0f);
						etf.setWeekFlow(0.0f);
						etf.setYtdFlow(0.0f);
						etf.setY1Flow(0.0f);
						etf.setY3Flow(0.0f);
						return etf;
	          }
	
	
	
	   private  <D, T> D map(final T entity, Class<D> outClass) {
	        return modelMapper.map(entity, outClass);
	    }
	
	   private  <D, T> List<D> mapAll(final Collection<T> entityList, Class<D> outCLass) {
	        return entityList.stream().map(entity -> map(entity, outCLass))
	                .collect(Collectors.toList());
	    }
}