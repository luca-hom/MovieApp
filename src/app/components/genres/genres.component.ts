import {Component, OnInit} from '@angular/core';

import {MovieService} from "../../services/movie.service";
import {Result} from "../../models/response";
import {Genre} from "../../models/genreList";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  dropdownList : Genre[] = [];
  selectedItems : Genre[]= [];
  dropdownSettings = {};

  genreList: Genre[] = [];


  allMovies: Result[] | undefined;
  genreQuery: String[] = [];


  constructor(private movieService: MovieService,
              private modalService: NgbModal) {

  }

  ngOnInit(): void {
    this.configureDropDownList();
  }

  configureDropDownList() {

    this.fetchDropDownList();

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      itemsShowLimit: 3,
      allowSearchFilter: true,
      enableCheckAll: false
    };
  }


  fetchGenres() {

    this.movieService.getGenres(this.createGenreQuery()).subscribe(movies => {
      let jsonValue = JSON.stringify(movies);
      let valueFromJson = JSON.parse(jsonValue);

      this.allMovies = ((valueFromJson || {}).results);
    })

  }

  createGenreQuery() : String[]  {

    this.genreQuery = [];
    for (let genres of this.selectedItems) {
      this.genreQuery.push(JSON.stringify(genres.id));
    }
    return this.genreQuery
  }



  fetchDropDownList() {
    this.movieService.getGenreList().subscribe(genres => {

      let jsonValue = JSON.stringify(genres);
      let valueFromJson = JSON.parse(jsonValue);
      this.genreList = ((valueFromJson || {}).genres);
      console.log(this.genreList);

      this.dropdownList = this.genreList;
    })

  }

  openModal(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'xl'})
  }

}

