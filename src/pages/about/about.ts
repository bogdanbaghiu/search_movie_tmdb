import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Proveedor1Provider } from '../../providers/proveedor1/proveedor1';
import { NavParams } from 'ionic-angular';
import { URL_IMAGE } from '../constants/constants';
import { Movie } from '../../models/movie';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public proveedor: Proveedor1Provider, public navParams: NavParams) { }

  movie: Movie;
  finalMovie;
  titleMovie;
  descriptionMovie;
  dateMovie;
  languageMovie;
  imageMovie;

  ionViewDidLoad() {
    this.loadMovieId();
  }

  loadMovieId() {
    this.movie = this.navParams.get('title');
    this.titleMovie = this.movie.title;
    this.languageMovie = this.movie.original_language;
    this.descriptionMovie = this.movie.overview;
    this.dateMovie = this.movie.release_date;
    this.imageMovie = URL_IMAGE.toString() + this.movie.backdrop_path;
  }

}
