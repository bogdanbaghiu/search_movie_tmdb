import { Component } from '@angular/core';
import { TmdbService } from '../services/tmdb/tmdb.service';
import { Router } from '@angular/router';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  allMovies;
  imageMovie;
  movieImageURL;

  constructor(public tmdbService: TmdbService, public router: Router) { }

  ngOnInit(): void {
    this.tmdbService.topMovies().subscribe(
      (data: any) => {
        this.allMovies = data.results;
        console.log(this.allMovies);
      },
      (error) => console.error(error)
    );
  }

  navigateMovie(movie: Movie) {
    let data = {
      title: movie
    };
    console.log(data);
  }

}
