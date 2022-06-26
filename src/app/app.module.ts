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
import { TopRatedComponent } from './components/top-rated/top-rated.component';
import { MostPopularComponent } from './components/most-popular/most-popular.component';
import { GenresComponent } from './components/genres/genres.component';
import {FormsModule} from "@angular/forms";
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";
import { SearchComponent } from './components/search/search.component';
import { FavouritesComponent } from './components/favourites/favourites.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    TopRatedComponent,
    MostPopularComponent,
    GenresComponent,
    SearchComponent,
    FavouritesComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FontAwesomeModule,
        HttpClientModule,
        FormsModule,
        NgMultiSelectDropDownModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
