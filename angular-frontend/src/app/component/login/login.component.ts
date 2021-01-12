import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	
	private username: string = '';
	private password: string = '';
	private error: string = null;

  constructor(private loginService:LoginService, private router: Router) { }

   ngOnInit() {}
  
  
  
     connect(){
		   this.error = null;
		   this.loginService.login(this.username, this.password)
		    .subscribe((res: any) => {
					             localStorage.setItem("jwt", res);
								  let currentUrl = this.router.url;
		this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=> this.router.navigate([currentUrl]));
					          }, 
					    (err) => {
							    console.log(err);
								this.error = "";
						}
						);  
					
          }

}
