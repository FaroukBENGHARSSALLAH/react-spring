import { Component, OnInit } from '@angular/core';
import { Etf } from '../../models/etf.model';

import { TransactionComponent } from '../transaction/transaction.component';

import { EtfService } from '../../services/etf.service';

@Component({
  selector: 'app-etf',
  templateUrl: './etf.component.html',
  styleUrls: ['./etf.component.css']
})
export class EtfComponent implements OnInit {

   private countries: Array<{idx: string, value: string}>  = [{idx : "USA", value : "USA"}, 
					   {idx : "Germany", value : "Germany"},
					   {idx : "France", value : "France"}, 
					   {idx : "Australia", value : "Australia"},
					   {idx : "Indonesia", value : "Indonesia"},
					   {idx : "Canada", value : "Canada"},
					   {idx : "Belgium", value : "Belgium"},
					   {idx : "Argentina", value : "Argentina"},
					   {idx : "United Kingdom", value : "United Kingdom"},
					   {idx : "Malaysia", value : "Malaysia"},
					   {idx : "Netherlands", value : "Netherlands"},
					   {idx : "Switzerland", value : "Switzerland"},
					   {idx : "Taiwan", value : "Taiwan"},
					   {idx : "Norway", value : "Norway"},
					   {idx : "Sweden", value : "Sweden"},
					   {idx : "Denmark", value : "Denmark"},
					   {idx : "Austria", value : "Austria"},
					   {idx : "Brazil", value : "Brazil"},
					   {idx : "Singapore", value : "Singapore"},
					   {idx : "India", value : "India"},
					   {idx : "Mexico", value : "Mexico"},
					   {idx : "Ireland", value : "Ireland"},
					   {idx : "Russia", value : "Russia"},
					   {idx : "Italy", value : "Italy"}];
					   
   private page: number = 0;	
   private pages: number = 0;
   private size: number = 0;	 
   private country: string = this.countries[0].value;	
   private etf: Etf;	 
   private etfticker: string = '';	
   private etfs: Etf[];
					   
  constructor(private etfService:EtfService) { }

  ngOnInit() {
	  this.etfService.fetch(this.country, this.page)
		    .subscribe((res: any) => {
					 this.etfs = res.data;
					 this.pages = res.pages;
					 this.size = res.size;  
				 });
     }
	 
	 
	     change(e){
		   this.country = e.target.value;
		   this.page = 0;
		   this.etfticker = '';
		   this.etfs = null;
		   this.etf = null;
		   this.etfService.fetch(this.country, this.page)
			.subscribe((res: any) => {
				    console.log(res);
					 this.etfs = res.data;
					 this.pages = res.pages;
					 this.size = res.size;  
				 });
           }	 
	 
	    fetch(page){
		   this.page = page;
		   this.etfticker = '';
		   this.etfs = null;
		   this.etf = null;
		   this.etfService.fetch(this.country, this.page)
			.subscribe((res: any) => {
				     console.log(res);
					 this.etfs = res.data;
					 this.pages = res.pages;
					 this.size = res.size; 
				 });
           } 
		   
		   
         fetchetf(etf){
			  this.etfticker = etf;
	          this.etfService.fetchetf(this.etfticker)
			      .subscribe((res: any) => {
					 this.etf = res;
				 });
           }
		   
		   
		   
		    back(){
		    this.etf = null;
                  }


        
	 

}
