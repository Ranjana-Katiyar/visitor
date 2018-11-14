import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import firebase from 'firebase';
//import { SocietieslistPage } from '../societieslist/societieslist';
import {SocietyregistrationPage} from "../societyregistration/societyregistration";

@IonicPage()
@Component({
  selector: 'page-cities',
  templateUrl: 'cities.html',
})
export class CitiesPage {

  cities: any[] = [];
  values: any =[];
  city: any = [];
  list: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items();
  }


  items() {
    
  firebase.firestore().collection("cities").orderBy("cityName").get({

  }).then((docs) => {
    docs.forEach((doc) => {
      this.cities.push(doc);
        // for (let i = 0 ; i<=this.cities.length; i++) {
        //     //this.cities = doc.data().cityName;
        //     this.city = this.cities[i];
        //     this.city++;
        // }
    })
      //console.log(this.city + "this is city list")
    //this.values = this.societyIds(this.city)
    console.log(this.cities);
  }).catch((err) => {
    console.log(err);
  })
  }


    // allItems () {
    //   firebase.firestore().collection("cities").get().then((results) => {
    //     console.log(results);
    //     this.city = results;
    //   }).catch((err)=> {
    //     console.log(err);
    //   })
    // }


    // societyIds (value) {
    //
    //     // firebase.firestore().collection("cities").where("cityName", "==", list)
    //     //     .get()
    //     //     .then((snapshot) => {
    //     //   snapshot.docs.forEach((document) => {
    //     //       console.log("new function");
    //     //     console.log(document.id, "=>", document.data());
    //     //   });
    //     //     }).catch((err) => {
    //     //   console.log(err);
    //     // })
    //
    // }
  itemSelected() {
    console.log(this.cities);
      //this.navCtrl.push(SocietieslistPage);
  }

  addSocieties() {
    this.navCtrl.push(SocietyregistrationPage);
    }

    goBack(){
      this.navCtrl.pop();
    }

}
