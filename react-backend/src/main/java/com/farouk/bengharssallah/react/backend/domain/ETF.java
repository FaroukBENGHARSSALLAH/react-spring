package com.farouk.bengharssallah.react.backend.domain;

import java.util.Random;

import javax.annotation.PostConstruct;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class ETF {
	
	@Id
	private long id;
	private String ticker;
	private String name;
	private String exchange;
	private String country;
	@Transient
	private float dayFlow;
	@Transient
	private float weekFlow;
	@Transient
	private float ytdFlow;
	@Transient
	private float y1Flow;
	@Transient
	private float y3Flow;
	
	
	
	
	
	public long getId() {
		return id;
	}





	public void setId(long id) {
		this.id = id;
	}





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





	@PostConstruct
	private void init() {
		Random r = new Random();
		this.dayFlow = (float) ((-751) + (162.30  - (-751)) * r.nextFloat());
		this.weekFlow = (float) ((398.86) + (11572.03  - (398.86)) * r.nextFloat());
		this.ytdFlow = (float) ((439.16) + (1582.75  - (439.16)) * r.nextFloat());
		this.y1Flow = (float) ((-1316) + (2757.20  - (-1316)) * r.nextFloat());
		this.y3Flow = (float) ((-2231.13) + (2877.76  - (-2231.13)) * r.nextFloat());
	         }


}
