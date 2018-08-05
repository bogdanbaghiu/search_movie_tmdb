import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Proveedor1Provider } from '../../providers/proveedor1/proveedor1';
import { NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { Movie } from '../../models/movie';
import { URL_IMAGE } from '../constants/constants';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  allMovies;
  imageMovie;
  movieImageURL;

  constructor(public navCtrl: NavController, public proveedor: Proveedor1Provider, public navParam: NavParams) { }

  viewLoad() {
    this.proveedor.searchCtrl().subscribe(
      (data: any) => { this.allMovies = data.results; },
      (error) => { console.error(error) }
    );
  }


  ionViewDidLoad() {
    this.viewLoad();
    this.movieImageURL = URL_IMAGE.toString();
  }

  loadMoviesSearch(titleMovie: string) {
    if (titleMovie == ' ') { this.viewLoad() } else {
      this.proveedor.searchMovie(titleMovie).subscribe(
        (data) => {
          this.allMovies = (Object.keys(data).map(e => data[e]))[3];
        },
        (error) => { console.error(error) }
      );
    }
  }

  SwitchTab(movie: Movie) {
    let data = {
      title: movie
    };
    this.navCtrl.push(AboutPage, data);
  }

}
