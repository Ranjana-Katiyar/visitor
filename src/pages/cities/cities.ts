import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-cities',
  templateUrl: 'cities.html',
})
export class CitiesPage {

  cities: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itemSelected();
  }

  itemSelected() {
    firebase.firestore().collection("cities").get({

    }).then((docs) => {
      docs.forEach((doc) => {
        this.cities.push(doc);
      })

      console.log(this.cities);
    }).catch((err) => {
      console.log(err);
    })
  }


}
