import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/root/app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
