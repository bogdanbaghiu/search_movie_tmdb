import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Constants from '../../pages/constants/constants';
import {Movies, ArrayMovies} from '../../models/movie';
import "rxjs/add/operator/map";

/*
  Generated class for the Proveedor1Provider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class Proveedor1Provider {

	constructor(public http: HttpClient) { }

	searchMovie(titleMovie) {
		return this.http.get(Constants.URL.toString() + Constants.SEARCH.toString() + Constants.API_KEY.toString()
			 + Constants.QUERY.toString() + titleMovie).map(res => res as ArrayMovies);
	}

	searchMovieById(MOVIEID: String) {
		return this.http.get(Constants.URL.toString() + Constants.MOVIE.toString() + MOVIEID +
			Constants.API_KEY.toString()).map(res => res as Movies);
	}

	searchCtrl() {
		return this.http.get(Constants.URL.toString() + Constants.TOP_RATED.toString()
			 + Constants.API_KEY.toString()).map(res => res as ArrayMovies);
	}

}
