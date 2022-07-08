import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

import {Favourite} from "../models/favourite"

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}


@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  private apiUrl = 'http://localhost:3000/api/v1/';

  constructor(private http: HttpClient) { }


  getFavourites(): Observable<Array<Favourite>> {
    let url = encodeURI(this.apiUrl + 'favourites');
    return this.http.get<Array<Favourite>>(url);
  }

  submitFavourite(fav : Favourite) {
    let url = encodeURI(this.apiUrl + 'favourites');
    let jsonValue = JSON.stringify(fav);
    console.log(jsonValue);
    return this.http.post<Favourite>(url, jsonValue, httpOptions);
  }

  deleteFavourite(id: number) {
    let url = encodeURI(this.apiUrl + 'favourite/' + id);
    return this.http.delete(url);
  }



}


