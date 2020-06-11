import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { EtfComponent } from './component/etf/etf.component';
import { LoginComponent } from './component/login/login.component';
import { TransactionComponent } from './component/transaction/transaction.component';

import { EtfService } from './services/etf.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EtfComponent,
    LoginComponent,
    TransactionComponent
   ],
  imports: [
    BrowserModule,
	HttpClientModule
    ],
  providers: [
     EtfService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
