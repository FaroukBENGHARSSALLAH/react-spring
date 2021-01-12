import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../utils/constants';

@Injectable()
export class LoginService {
	
  constructor(private http:HttpClient) { }
  
  
  public login(username, password){
	 return this.http.post(Constants.HOST + 'authenticate',{ username:username, password:password}, {responseType: 'text'});
           } 

}
