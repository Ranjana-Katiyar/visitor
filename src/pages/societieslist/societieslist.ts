import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import firebase from 'firebase';
import {WingslistPage} from "../wingslist/wingslist";
 



@IonicPage()
@Component({
  selector: 'page-societieslist',
  templateUrl: 'societieslist.html',
})
export class SocietieslistPage {

  societies : any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items();
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad SocietieslistPage');
  // }

  items() {
    firebase.firestore().collection("societies").get().then((docs) => {
      docs.forEach((doc) => {
        this.societies.push(doc);
      })

        console.log(this.societies);
    }).catch((err) => {
      console.log(err);
    })
  }

    itemSelected() {
    this.navCtrl.push(WingslistPage);
    }

    goBack(){
      this.navCtrl.pop();
    }

}
