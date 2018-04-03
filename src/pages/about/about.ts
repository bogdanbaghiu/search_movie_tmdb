import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Proveedor1Provider } from '../../providers/proveedor1/proveedor1';
import { NavParams } from 'ionic-angular';
import { URL_IMAGE } from '../constants/constants';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public proveedor: Proveedor1Provider, public navParams: NavParams) { }

  idMovie;
  finalMovie;
  titleMovie;
  descriptionMovie;
  dateMovie;
  languageMovie;
  imageMovie;

  ionViewDidLoad() {
    this.idMovie = this.navParams.get('title');
    this.loadMovieId();
  }

  loadMovieId() {
    this.proveedor.searchMovieById(this.idMovie).subscribe(
      (data) => {
        this.titleMovie = data.title;
        this.languageMovie = data.original_language;
        this.descriptionMovie = data.overview;
        this.dateMovie = data.release_date;
        this.imageMovie = URL_IMAGE.toString() + data.backdrop_path;
      },
      (error) => { console.error(error) }
    );
  }

}
