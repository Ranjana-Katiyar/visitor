import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-helperout',
  templateUrl: 'helperout.html',
})
export class HelperoutPage {

  helperout: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.helperout = navParams.get('data');
    console.log(this.helperout);
  }

 
}
