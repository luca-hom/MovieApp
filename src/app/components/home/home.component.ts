import { Component, OnInit } from '@angular/core';

import {MovieService} from "../../services/movie.service";
import {Result, RootObject} from "../../models/response";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allMovies: Result[] | undefined;


  constructor(private movieService : MovieService) {
  }

  ngOnInit(): void {
    this.fetchAllNpMovies();

  }

  fetchAllNpMovies() {

    this.movieService.getCurrentlyInTheatre().subscribe( movies => {

      let jsonValue = JSON.stringify(movies);
      let valueFromJson = JSON.parse(jsonValue);
      console.log((valueFromJson || {}).results);
      this.allMovies = ((valueFromJson || {}).results);

    });





  }

}
