import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FlatnoPage } from '../flatno/flatno';




@IonicPage()
@Component({
  selector: 'page-ownerdashboard',
  templateUrl: 'ownerdashboard.html',
})
export class OwnerdashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OwnerdashboardPage');
  }

  goToFlat(){
    this.navCtrl.push(FlatnoPage);
  }
}
