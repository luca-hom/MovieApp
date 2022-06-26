import {Component, OnInit} from '@angular/core';

import {FavouriteService} from "../../services/favourite.service";
import {Favourite} from "../../models/favourite";


@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  allFavs: Favourite[] | undefined;

  constructor(private favouriteService : FavouriteService) { }

  ngOnInit(): void {
    this.fetchFavourites();
  }

  fetchFavourites() {
    this.favouriteService.getFavourites().subscribe( favs => {
      let jsonValue = JSON.stringify(favs);
      let valueFromJson = JSON.parse(jsonValue);
      console.log((valueFromJson || {}));
      this.allFavs = ((valueFromJson || {}));
    })

  }

  removeFavourite(id: number) {
    this.favouriteService.deleteFavourite(id).subscribe(response => {
    }).add(() => {this.ngOnInit();});


  }

}
