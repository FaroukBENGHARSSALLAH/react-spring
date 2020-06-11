import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService) { }

   ngOnInit() {}
  
  
  
     login(login, password){
		  /* this.loginService.login(login, password)
		    .subscribe((res: any) => {
					 this.etfs = res.data;}, 
					    (err) => {console.log(err)});  */
		localStorage.setItem("jwt", "jwt");
		localStorage.setItem("expire", "jwt");				
          }

}
