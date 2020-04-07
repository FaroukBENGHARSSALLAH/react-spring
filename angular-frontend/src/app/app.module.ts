import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EtfComponent } from './etf/etf.component';

import { EtfService } from './services/etf.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EtfComponent
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
