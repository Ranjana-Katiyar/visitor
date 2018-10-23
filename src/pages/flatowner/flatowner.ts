import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GuestformPage } from "../guestform/guestform";
 

@IonicPage()
@Component({
  selector: 'page-flatowner',
  templateUrl: 'flatowner.html',
})
export class FlatownerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlatownerPage');
  }

   goToModal(){
    this.navCtrl.push(GuestformPage);
  }


}
