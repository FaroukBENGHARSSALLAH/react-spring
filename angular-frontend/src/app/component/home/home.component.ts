import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

    public authentificated(): boolean {
			if (localStorage.getItem("jwt")) {
			  return true
			} else {
			  return false;
			};
		  }
}
