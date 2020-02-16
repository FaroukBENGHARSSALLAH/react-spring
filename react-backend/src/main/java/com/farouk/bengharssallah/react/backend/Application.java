package com.farouk.bengharssallah.react.backend;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.util.ResourceUtils;

import com.farouk.bengharssallah.react.backend.domain.ETF;
import com.farouk.bengharssallah.react.backend.repository.ETFRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

@SpringBootApplication
public class Application /*implements CommandLineRunner  */{

	public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
          }

	@Autowired
	ETFRepository eTFRepository;
	/*@Override
	public void run(String... args) throws Exception {
		ObjectMapper objectMapper = new ObjectMapper();
		List<ETF> etfs = objectMapper.readValue(ResourceUtils.getFile( "classpath:etfs.json"), 
				new TypeReference<List<ETF>>(){});
		etfs.stream().forEach(e -> eTFRepository.save(e));
	}*/
	
    }
	
	    
