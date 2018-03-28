import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { Proveedor1Provider } from '../../providers/proveedor1/proveedor1';
import { dateDataSortValue } from 'ionic-angular/util/datetime-util';
import { isUndefined } from 'ionic-angular/util/util';
import { IonicPage, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  movies;
  allMovies;
  movieSelectId;

  constructor(public navCtrl: NavController, public proveedor: Proveedor1Provider, public navParam: NavParams
    , private viewCtrl: ViewController) {

  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }

  ionViewDidLoad() {
    this.proveedor.searchCtrl().subscribe(
      (data) => { this.movies = data; this.allMovies = (Object.keys(data).map(e => data[e]))[3]; },
      (error) => { console.error(error) }
    );
  }

  loadMoviesSearch(titleMovie: string) {
    var empty = (titleMovie == ' ');
    if (titleMovie == ' ') { this.ionViewDidLoad() } else {
      this.proveedor.searchMovie(titleMovie).subscribe(
        (data) => {
          this.movies = data;
          this.allMovies = (Object.keys(data).map(e => data[e]))[3];
        },
        (error) => { console.error(error) }
      );
    }
  }

  SwitchTab(movieTitle: string) {
    let data = {
      title: movieTitle
    };
    this.navCtrl.push(AboutPage, data);
  }

}
