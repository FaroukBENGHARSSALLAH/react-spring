package com.farouk.bengharssallah.react.backend.model;

import java.io.Serializable;

public class IETFDTO implements Serializable {
	
	private String ticker;
	private String name;
	private String exchange;
	private String country;
	private float dayFlow;
	private float weekFlow;
	private float ytdFlow;
	private float y1Flow;
	private float y3Flow;
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
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public float getDayFlow() {
		return dayFlow;
	}
	public void setDayFlow(float dayFlow) {
		this.dayFlow = dayFlow;
	}
	public float getWeekFlow() {
		return weekFlow;
	}
	public void setWeekFlow(float weekFlow) {
		this.weekFlow = weekFlow;
	}
	public float getYtdFlow() {
		return ytdFlow;
	}
	public void setYtdFlow(float ytdFlow) {
		this.ytdFlow = ytdFlow;
	}
	public float getY1Flow() {
		return y1Flow;
	}
	public void setY1Flow(float y1Flow) {
		this.y1Flow = y1Flow;
	}
	public float getY3Flow() {
		return y3Flow;
	}
	public void setY3Flow(float y3Flow) {
		this.y3Flow = y3Flow;
	}
	
	

	
	

}
