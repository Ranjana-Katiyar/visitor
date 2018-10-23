import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FlatownerPage } from "../flatowner/flatowner";

@IonicPage()
@Component({
  selector: 'page-flatno',
  templateUrl: 'flatno.html',
})
export class FlatnoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlatnoPage');
  }

  goToOwner(){
    this.navCtrl.push(FlatownerPage);
  }

}
