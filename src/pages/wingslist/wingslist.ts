import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import {FlatlistPage} from "../flatlist/flatlist";

 

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

    goBack(){
      this.navCtrl.pop();
    }
}
