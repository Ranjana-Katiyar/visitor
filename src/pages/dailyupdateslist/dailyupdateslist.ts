import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

 
@IonicPage()
@Component({
  selector: 'page-dailyupdateslist',
  templateUrl: 'dailyupdateslist.html',
})
export class DailyupdateslistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DailyupdateslistPage');
  }

  goBack(){
    this.navCtrl.pop();
  }
}
