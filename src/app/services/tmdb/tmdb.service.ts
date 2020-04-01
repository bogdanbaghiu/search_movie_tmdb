import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Constants from '../../constants/constants';
import { Movie, ArrayMovies } from '../../models/movie';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  constructor(public http: HttpClient) { }

  searchMovie(titleMovie) {
    return this.http.get(Constants.URL + Constants.SEARCH + Constants.API_KEY
      + Constants.QUERY + titleMovie).pipe(map(res => res as ArrayMovies));
  }

  searchMovieById(MOVIEID: String) {
    return this.http.get(Constants.URL + Constants.MOVIE + MOVIEID +
      Constants.API_KEY).pipe(map(res => res as Movie));
  }

  topMovies() {
    return this.http.get(Constants.URL + Constants.TOP_RATED
      + Constants.API_KEY).pipe(map(res => res as ArrayMovies));
  }
}
