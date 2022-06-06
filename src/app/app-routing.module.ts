import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {HomeComponent} from "./components/home/home.component";
import {TopRatedComponent} from "./components/top-rated/top-rated.component";
import {MostPopularComponent} from "./components/most-popular/most-popular.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'top-rated', component: TopRatedComponent},
  { path: 'most-popular', component: MostPopularComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
