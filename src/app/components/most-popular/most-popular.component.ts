import { Component, OnInit } from '@angular/core';

import {MovieService} from "../../services/movie.service";
import {Result, RootObject} from "../../models/response";

@Component({
  selector: 'app-most-popular',
  templateUrl: './most-popular.component.html',
  styleUrls: ['./most-popular.component.css']
})
export class MostPopularComponent implements OnInit {

  allMovies: Result[] | undefined;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.fetchMostPopular();
  }


  fetchMostPopular() {

    this.movieService.getMostPopular().subscribe(movies => {
      let jsonValue = JSON.stringify(movies);
      let valueFromJson = JSON.parse(jsonValue);

      this.allMovies = ((valueFromJson || {}).results);
    })

  }

}
