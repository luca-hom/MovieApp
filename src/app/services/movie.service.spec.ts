import {TestBed} from '@angular/core/testing';

import * as data from 'src/assets/api-key.json';

import {MovieService} from './movie.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {RootObject} from "../models/response";

describe('MovieService', () => {
  let service: MovieService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService]
    });
    service = TestBed.inject(MovieService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve movies from API', () => {
    const dummyMovies: RootObject[] = [
      {
        page: 1,
        results: [{ poster_path: 'Test poster path',
          adult: true,
          overview: 'This is a Test Overview',
          release_date: '12-12-2012',
          genre_ids: [1,2,3], id: 10,
          original_title: 'Test OG Title',
          original_language: 'Test Language',
          title: 'Test Title',
          backdrop_path: 'Test Backdrop URL',
          popularity: 12,
          vote_count: 12,
          video: true,
          vote_average: 12 }],
        dates: {maximum: '12-12-12', minimum: '12-12-12'},
        total_pages: 12,
        total_results: 12
      }

    ];

    service.getMostPopular().subscribe(movies => {
      expect(movies.length).toBe(1);
      expect(movies).toEqual(dummyMovies);
    });

    let apiKey = data;
    const request = httpMock.expectOne('https://api.themoviedb.org/3/movie/popular'+'?api_key='+apiKey.key +'&page=1');

    expect(request.request.method).toBe('GET');
    request.flush(dummyMovies);
  })

});
