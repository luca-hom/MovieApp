import { Injectable } from '@angular/core';
import {NPResult, NPDates, NPRootObject} from "../models/nowPlaying"
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



  getCurrentlyInTheatre(): Observable<Array<NPRootObject>> {
    let apiKey = data;
    let url = encodeURI(this.apiUrl + '/movie/now_playing' + '?api_key='+apiKey.key + '&region=US' + '&page=1')
    console.log(url);

    return this.http.get<Array<NPRootObject>>(url);
    }


  }





