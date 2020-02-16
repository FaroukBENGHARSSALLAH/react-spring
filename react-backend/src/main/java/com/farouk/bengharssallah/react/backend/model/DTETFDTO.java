package com.farouk.bengharssallah.react.backend.model;

import java.io.Serializable;


public class DTETFDTO implements Serializable {
	
	private String ticker;
	private String name;
	private String exchange;
	public String getTicker() {
		return ticker;
	}
	public void setTicker(String ticker) {
		this.ticker = ticker;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getExchange() {
		return exchange;
	}
	public void setExchange(String exchange) {
		this.exchange = exchange;
	}
	
	
	

}
