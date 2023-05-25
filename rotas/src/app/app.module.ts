import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {IndexModule} from './pages/index/index.module';
import {PortfolioModule} from './pages/portfolio/portfolio.module'
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IndexModule,
    PortfolioModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
