import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-visitorform',
  templateUrl: 'visitorform.html',
})
export class VisitorformPage {

  name: string="";
  email: string="";
  mobile: string="";
  Date: string="";
  vehicle: string="";
  meeting: string="";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VisitorformPage');
  }

}
