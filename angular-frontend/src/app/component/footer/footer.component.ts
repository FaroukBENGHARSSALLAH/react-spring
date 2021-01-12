import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  
	   
  getYear() {
	    return new Date().getFullYear();
       }
	   
  public authentificated(): boolean {
			if (localStorage.getItem("jwt")) {
			  return true
			} else {
			  return false;
			};
		  }
		  
}
