import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import firebase from 'firebase';
import { SocietieslistPage } from '../societieslist/societieslist';
import {SocietyregistrationPage} from "../societyregistration/societyregistration";

@IonicPage()
@Component({
  selector: 'page-cities',
  templateUrl: 'cities.html',
})
export class CitiesPage {

  cities: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items();
  }

  items() {
    
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

  itemSelected() {
    this.navCtrl.push(SocietieslistPage);
  }

  addSocieties() {
    this.navCtrl.push(SocietyregistrationPage);
    }

    goBack(){
      this.navCtrl.pop();
    }

}
