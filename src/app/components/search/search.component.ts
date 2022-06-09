import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MovieService} from "../../services/movie.service";
import {Result} from "../../models/response";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchQuery = '';
  allMovies: Result[] | undefined;

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['query'];
    });

    this.fetchSearch();
  }


  fetchSearch() {

    this.movieService.getSearch(this.searchQuery).subscribe(movies => {
      let jsonValue = JSON.stringify(movies);
      let valueFromJson = JSON.parse(jsonValue);

      this.allMovies = ((valueFromJson || {}).results);
    })

  }

}
