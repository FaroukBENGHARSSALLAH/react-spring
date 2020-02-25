package com.farouk.bengharssallah.react.backend.model;

import java.io.Serializable;
import java.util.List;


public class DTPageDTO implements Serializable {
	
	private List<DTETFDTO> data;
	private int size;
	private int pages;
	
	public DTPageDTO()  {}

	public List<DTETFDTO> getData() {
		return data;
	}

	public void setData(List<DTETFDTO> data) {
		this.data = data;
	}

	public int getSize() {
		return size;
	}

	public void setSize(int size) {
		this.size = size;
	}

	public int getPages() {
		return pages;
	}

	public void setPages(int pages) {
		this.pages = pages;
	}
	
	
}
