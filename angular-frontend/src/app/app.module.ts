import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { EtfComponent } from './component/etf/etf.component';
import { LoginComponent } from './component/login/login.component';
import { TransactionComponent } from './component/transaction/transaction.component';

import { EtfService } from './services/etf.service';
import { LoginService } from './services/login.service';
import { FooterComponent } from './component/footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EtfComponent,
    LoginComponent,
    HomeComponent,
    TransactionComponent,
    FooterComponent
	],
  imports: [
    BrowserModule,
	FormsModule,
	HttpClientModule,
	AppRoutingModule 
    ],
  providers: [
     EtfService,
	 LoginService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
