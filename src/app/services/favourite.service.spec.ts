import {TestBed} from '@angular/core/testing';

import {FavouriteService} from './favourite.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {Favourite} from "../models/favourite";

describe('FavouriteService', () => {
  let service: FavouriteService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FavouriteService]
    });
    service = TestBed.inject(FavouriteService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve Favourites from API', () => {
    const dummyFavs: Favourite[] = [
      { _id: '1', movie_id: 10,movie_name: 'Test1'},
      { _id: '2', movie_id: 20,movie_name: 'Test2'},
      { _id: '3', movie_id: 30,movie_name: 'Test3'}
    ];

    service.getFavourites().subscribe(favs => {
      expect(favs.length).toBe(3);
      expect(favs).toEqual(dummyFavs);
    });

    const request = httpMock.expectOne('http://localhost:3000/api/v1/favourites');

    expect(request.request.method).toBe('GET');
    request.flush(dummyFavs);
  });




});
