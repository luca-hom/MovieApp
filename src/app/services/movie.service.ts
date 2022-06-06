import { Injectable } from '@angular/core';
import {Result, Dates, RootObject} from "../models/response"
import {HttpClient, HttpHeaders} from "@angular/common/http";

import * as data from 'src/assets/api-key.json';
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'https://api.themoviedb.org/3';


  constructor(private http: HttpClient) {

  }



  getCurrentlyInTheatre(): Observable<Array<RootObject>> {
    let apiKey = data;
    let url = encodeURI(this.apiUrl + '/movie/now_playing' + '?api_key='+apiKey.key + '&region=US' + '&page=1')
    return this.http.get<Array<RootObject>>(url);
    }

    getTopRated(): Observable<Array<RootObject>> {
    let apiKey = data;
    let url = encodeURI(this.apiUrl+'/movie/top_rated' + '?api_key='+apiKey.key + '&page=1')
      return this.http.get<Array<RootObject>>(url);
    }

  getMostPopular(): Observable<Array<RootObject>> {
    let apiKey = data;
    let url = encodeURI(this.apiUrl+'/movie/popular' + '?api_key='+apiKey.key + '&page=1')
    return this.http.get<Array<RootObject>>(url);
  }






  }





