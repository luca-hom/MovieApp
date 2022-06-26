import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MovieService} from "../../services/movie.service";
import {Result} from "../../models/response";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Favourite} from "../../models/favourite";
import {FavouriteService} from "../../services/favourite.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchQuery = '';
  allMovies: Result[] | undefined;

  constructor(private route: ActivatedRoute,
              private movieService: MovieService,
              private modalService: NgbModal,
              private favouriteService: FavouriteService) { }

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

  openModal(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'xl'})
  }

  saveFavourite(id: number, name: string) {
    const newFav: Favourite = {movie_id: id, movie_name: name};
    this.favouriteService.submitFavourite(newFav).subscribe(response => {});
  }

}
