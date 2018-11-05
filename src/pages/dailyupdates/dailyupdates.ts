import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

 

@IonicPage()
@Component({
  selector: 'page-dailyupdates',
  templateUrl: 'dailyupdates.html',
})
export class DailyupdatesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DailyupdatesPage');
  }

  goBack(){
    this.navCtrl.pop();
  }

}
