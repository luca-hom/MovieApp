import { Component, OnInit } from '@angular/core';

import {MovieService} from "../../services/movie.service";
import {Result, RootObject} from "../../models/response";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FavouriteService} from "../../services/favourite.service";
import {Favourite} from "../../models/favourite";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allMovies: Result[] | undefined;


  constructor(private movieService : MovieService,
              private modalService : NgbModal,
              private favouriteService: FavouriteService) {
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

  openModal(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'xl'})
  }

  saveFavourite(id: number, name: string) {
    const newFav: Favourite = {movie_id: id, movie_name: name};
    this.favouriteService.submitFavourite(newFav).subscribe(response => {});
  }

}
