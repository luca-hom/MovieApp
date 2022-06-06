import { Component, OnInit } from '@angular/core';

import {MovieService} from "../../services/movie.service";
import {Result, RootObject} from "../../models/response";

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent implements OnInit {

  allMovies: Result[] | undefined;


  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.fetchAllTopRated();
  }

  fetchAllTopRated() {

    this.movieService.getTopRated().subscribe(movies => {
      let jsonValue = JSON.stringify(movies);
      let valueFromJson = JSON.parse(jsonValue);

      this.allMovies = ((valueFromJson || {}).results);
    })

  }

}
