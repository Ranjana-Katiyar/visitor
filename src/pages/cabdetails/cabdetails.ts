import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

 

@IonicPage()
@Component({
  selector: 'page-cabdetails',
  templateUrl: 'cabdetails.html',
})
export class CabdetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CabdetailsPage');
  }

  goBack(){
    this.navCtrl.pop();
  }
}
