import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items();
  }

  items() {
    
      firebase.firestore().collection("cities").orderBy("cityName").get({

      }).then((docs) => {
        docs.forEach((doc) => {
          this.cities.push(doc);
      })
      
        console.log(this.cities);
      }).catch((err) => {
        console.log(err);
      })
  }

    // allItems (city) {
    //   firebase.firestore().collection("cities").get().then((snapshot) => {
    //     snapshot.docs.forEach((doc) => {
         
    //         if(city==doc.data().cityName){
    //           console.log(doc.data().societyId);
    //         }

    //     })
    //   }).catch((err)=> {
    //     console.log(err);
    //   })
    // }
  
  itemSelected() {
      //this.navCtrl.push(SocietieslistPage);
  }

  addSocieties() {
    this.navCtrl.push(SocietyregistrationPage);
    }

    goBack(){
      this.navCtrl.pop();
    }

}
