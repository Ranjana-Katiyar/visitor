import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import {FlatlistPage} from "../flatlist/flatlist";

/**
 * Generated class for the WingslistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wingslist',
  templateUrl: 'wingslist.html',
})
export class WingslistPage {

  wings : any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items();
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad WingslistPage');
  // }

  items() {
    firebase.firestore().collection("wings").get().then((docs) => {
      docs.forEach((doc) => {
        this.wings.push(doc);
      })
        console.log(this.wings);

    }).catch((err) => {
      console.log(err);
    })
  }

    itemSelected() {
    this.navCtrl.push(FlatlistPage);
    }

}
