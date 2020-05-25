package com.farouk.bengharssallah.react.test;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.support.PagedListHolder;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.test.context.junit4.SpringRunner;

import com.farouk.bengharssallah.react.backend.Application;
import com.farouk.bengharssallah.react.backend.domain.ETF;
import com.farouk.bengharssallah.react.backend.repository.ETFRepository;
import com.farouk.bengharssallah.react.backend.service.ETFService;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertThat;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
@AutoConfigureMockMvc
public class ETFServiceTest {
	
	@MockBean
	ETFRepository etfRepository;

	@Autowired
	ETFService etfService;

	
	@Test
	public void shouldReturnByTicker() {
		  {
		ETF etf = new ETF();
		etf.setTicker("Ticker");
		etf.setName("name");
		etf.setExchange("exchange");
		etf.setCountry("country");
		
		Mockito.when(etfRepository.findByTicker("Ticker")).thenReturn(etf);
	  	  }

		ETF etf  = etfService.findByTicker("Ticker");
		assertNotNull("ETF shouldn't be null", etf);
		assertThat(etf.getName(), equalTo("name"));
		assertThat(etf.getExchange(), equalTo("exchange"));
		assertThat(etf.getCountry(), equalTo("country"));
	}
	
	
	@Test
	public void shouldReturnByCountry() {
		  {
		ETF etf = new ETF();
		etf.setTicker("Ticker");
		etf.setName("name");
		etf.setExchange("exchange");
		etf.setCountry("country");
		PageImpl page = new PageImpl(Arrays.asList(etf), PageRequest.of(0, 1), 1);
		Mockito.when(etfRepository.findByCountry("country", PageRequest.of(0, 1)))
		 .thenReturn(page);
	  	  }

		Page<ETF> etfs  = etfService.findByCountry("country", PageRequest.of(0, 1));
		assertNotNull("ETF Page shouldn't be null", etfs);
		assertThat(etfs.getTotalElements(), equalTo(1L));
		assertThat(etfs.getSize(), equalTo(1));
		assertThat(etfs.getContent().get(0).getName(), equalTo("name"));
		assertThat(etfs.getContent().get(0).getExchange(), equalTo("exchange"));
		assertThat(etfs.getContent().get(0).getCountry(), equalTo("country"));
	}
	
	
	@Test
	public void shouldReturnAll() {
		  {
		ETF etf = new ETF();
		etf.setTicker("Ticker");
		etf.setName("name");
		etf.setExchange("exchange");
		etf.setCountry("country");
		Mockito.when(etfRepository.findAll()).thenReturn(Arrays.asList(etf));
	  	  }

		List<ETF> etfs  = etfService.findAll();
		assertNotNull("ETF List shouldn't be null", etfs);
		assertThat(etfs.size(), equalTo(1));
		assertThat(etfs.get(0).getName(), equalTo("name"));
		assertThat(etfs.get(0).getExchange(), equalTo("exchange"));
		assertThat(etfs.get(0).getCountry(), equalTo("country"));
	}
	
	@Test
	public void shouldReturnNullForNotExistingETF() {
		ETF etf = etfService.findByTicker("vvvv");
		assertNull(etf);
	}
}
