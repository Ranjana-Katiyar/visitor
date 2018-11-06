import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import {OwnerdashboardPage} from "../ownerdashboard/ownerdashboard";

/**
 * Generated class for the FlatlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flatlist',
  templateUrl: 'flatlist.html',
})
export class FlatlistPage {

  flats: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items();
  }


  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad FlatlistPage');
  // }

  items() {
    firebase.firestore().collection("flats").get().then((docs) => {
      docs.forEach((doc) => {
        this.flats.push(doc);
      })
        console.log(this.flats);

    }).catch((err) => {
      console.log(err);
    })
  }

    itemSelected() {
    this.navCtrl.push(OwnerdashboardPage);
    }

}
