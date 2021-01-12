import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	
  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  
  logout(){
		localStorage.removeItem("jwt");
		let currentUrl = this.router.url;
		this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=> this.router.navigate([currentUrl]));
		       }
			   
			   
	   public authentificated(): boolean {
			if (localStorage.getItem("jwt")) {
			  return true
			} else {
			  return false;
			};
		  }	   

}
