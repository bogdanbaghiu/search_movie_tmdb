import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Constants from '../../pages/constants/constants';
import {Movie, ArrayMovies} from '../../models/movie';
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
		return this.http.get(Constants.URL + Constants.SEARCH + Constants.API_KEY
			 + Constants.QUERY + titleMovie).map(res => res as ArrayMovies);
	}

	searchMovieById(MOVIEID: String) {
		return this.http.get(Constants.URL + Constants.MOVIE + MOVIEID +
			Constants.API_KEY).map(res => res as Movie);
	}

	searchCtrl() {
		return this.http.get(Constants.URL + Constants.TOP_RATED
			 + Constants.API_KEY).map(res => res as ArrayMovies);
	}

}
