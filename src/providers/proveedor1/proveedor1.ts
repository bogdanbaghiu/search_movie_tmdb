import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Proveedor1Provider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Proveedor1Provider {

	constructor(public http: HttpClient) { }

	searchMovie(titleMovie) {
		var API_KEY = '?api_key=36f4c35cd07921d68c30b0b815fdff10';
		var URL = 'https://api.themoviedb.org/3/';
		var SEARCH = 'search/movie';
		var QUERY = "&query=";
		var MOVIE_CREDIT = "movie_credits";
		var ITE_PATH = "http://image.tmdb.org/t/p/w500/"
		var title = 'search ctrl';
		var moviesLoaded = false;
		return this.http.get(URL + SEARCH + API_KEY + QUERY + titleMovie).map((res: JSON) => res);
	}

	searchMovieById(MOVIEID: String) {
		var API_KEY = '?api_key=36f4c35cd07921d68c30b0b815fdff10';
		var URL = 'https://api.themoviedb.org/3/';
		var SEARCH = 'movie/';
		var MOVIE_CREDIT = "movie_credits";
		var ITE_PATH = "http://image.tmdb.org/t/p/w500/"
		var title = 'search ctrl';
		var moviesLoaded = false;
		return this.http.get(URL + SEARCH + MOVIEID + API_KEY).map((res: JSON) => res);
	}

	searchCtrl() {
		var API_KEY = '?api_key=36f4c35cd07921d68c30b0b815fdff10';
		var URL = 'https://api.themoviedb.org/3/';
		var TOP_RATED = 'movie/top_rated';
		var MOVIE_CREDIT = "movie_credits";
		var ITE_PATH = "http://image.tmdb.org/t/p/w500/"
		var title = 'search ctrl';
		var moviesLoaded = false;
		return this.http.get(URL + TOP_RATED + API_KEY).map((res: JSON) => res);
	};

}
