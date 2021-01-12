import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Constants } from '../utils/constants';

@Injectable()
export class EtfService {
	
	private httpHeaders: HttpHeaders = new HttpHeaders({
           Authorization: Constants.TOKEN_PREFIX + localStorage.getItem('jwt')
       });
	
  constructor(private http:HttpClient) { }
  
  
  public fetch(country, page){
	 return this.http.get(Constants.HOST + 'etfs/' + country + '/' + page, { headers: this.httpHeaders });
           } 
		   
		   
  public fetchetf(etf){
	 return this.http.get(Constants.HOST + 'etf/' + etf, { headers: this.httpHeaders });
           }		   

}
