package com.farouk.bengharssallah.react.test;

import org.junit.Before;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.farouk.bengharssallah.react.backend.Application;
import com.farouk.bengharssallah.react.backend.service.ETFService;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
@AutoConfigureMockMvc
public abstract class AbstractRestControllerTest {

	@Autowired
	protected MockMvc mockMvc;
	
	@Autowired
	protected ModelMapper modelMapper;

	@MockBean
	ETFService etfService;


	@Before
	public void setUp() {
		Mockito.reset(etfService);
	}

}
