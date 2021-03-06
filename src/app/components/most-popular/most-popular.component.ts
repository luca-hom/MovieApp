import { Component, OnInit } from '@angular/core';

import {MovieService} from "../../services/movie.service";
import {Result, RootObject} from "../../models/response";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Favourite} from "../../models/favourite";
import {FavouriteService} from "../../services/favourite.service";

@Component({
  selector: 'app-most-popular',
  templateUrl: './most-popular.component.html',
  styleUrls: ['./most-popular.component.css']
})
export class MostPopularComponent implements OnInit {

  allMovies: Result[] | undefined;

  constructor(private movieService: MovieService,
              private modalService: NgbModal,
              private favouriteService: FavouriteService) { }

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

  openModal(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'xl'})
  }

  saveFavourite(id: number, name: string) {
    const newFav: Favourite = {movie_id: id, movie_name: name};
    this.favouriteService.submitFavourite(newFav).subscribe(response => {});
  }

}
