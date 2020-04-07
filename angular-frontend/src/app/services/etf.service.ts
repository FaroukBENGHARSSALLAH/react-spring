import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EtfService {
	
  private host:string = 'http://localhost:8080/';

  constructor(private http:HttpClient) { }
  
  
  public fetch(country, page){
	 return this.http.get(this.host + 'etfs/' + country + '/' + page);
           } 
		   
		   
  public fetchetf(etf){
	 return this.http.get(this.host + 'etf/' + etf);
           }		   

}
