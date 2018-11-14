import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 

@IonicPage()
@Component({
  selector: 'page-guestform',
  templateUrl: 'guestform.html',
})
export class GuestformPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuestformPage');
  }
 
  goBack(){
    this.navCtrl.pop();
  }
}
