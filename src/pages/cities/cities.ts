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
      // this.list = this.cities;
        // if(doc){
        //   for (let i = 0 ; i<this.cities.length; i++) {
        //     console.log("FOr loop start");
        //     this.city[i] = doc.data().cityName;
        //     console.log("getiing field value");
        //     this.city[i]++;
        //     this.list = this.city;
        //  }
        // }
          
        
    })
      //console.log(this.city + "this is city list")
    //this.values = this.societyIds(this.city)
    console.log(this.cities);
  }).catch((err) => {
    console.log(err);
  })
  }


    allItems (city) {
      firebase.firestore().collection("cities").get().then((snapshot) => {
        snapshot.docs.forEach((doc) => {
         
            if(city==doc.data().cityName){
              console.log(doc.data().societyId);
            }
        })
      }).catch((err)=> {
        console.log(err);
      })
    }




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
  itemSelected(city) {
      this.allItems(city);
    //console.log(this.list);
    console.log(city);
      //this.navCtrl.push(SocietieslistPage);
   
  }

  addSocieties() {
    this.navCtrl.push(SocietyregistrationPage);
    }

    goBack(){
      this.navCtrl.pop();
    }

}
