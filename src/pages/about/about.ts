import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Proveedor1Provider } from '../../providers/proveedor1/proveedor1';
import { dateDataSortValue } from 'ionic-angular/util/datetime-util';
import { isUndefined } from 'ionic-angular/util/util';
import { IonicPage, NavParams } from 'ionic-angular';

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
    console.error(this.idMovie);
    this.proveedor.searchMovieById(this.idMovie).subscribe(
      (data) => {
        this.titleMovie = (Object.keys(data).map(e => data[e]))[9];
        this.languageMovie = (Object.keys(data).map(e => data[e]))[8];
        this.descriptionMovie = (Object.keys(data).map(e => data[e]))[10];
        this.dateMovie = (Object.keys(data).map(e => data[e]))[15];
        this.imageMovie = "https://image.tmdb.org/t/p/w500" + (Object.keys(data).map(e => data[e]))[1];
      },
      (error) => { console.error(error) }
    );

  }


}
