import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import firebase from 'firebase';
//import { SocietieslistPage } from '../societieslist/societieslist';
import {SocietyregistrationPage} from "../societyregistration/societyregistration";
import {Observable} from 'rxjs/Rx';

@IonicPage()
@Component({
  selector: 'page-cities',
  templateUrl: 'cities.html',
})
export class CitiesPage {
  cities: any[] = [];
  values: any =[];
  city: any = [];
  uniquecities: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items();
  }

  items() {
    
  firebase.firestore().collection("cities").orderBy("cityName").get({

  }).then((docs) => {
    docs.forEach((doc) => {
      this.cities.push(doc);
      Observable.merge(this.cities)
      .distinct((x) => x.cityName)
      .subscribe(y => {
        this.uniquecities.push(y)
        console.log(this.uniquecities);
      });
          
        
    })
      
     
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



 
  itemSelected(city) {
      this.allItems(city);
    
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
