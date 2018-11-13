import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { WingPage } from '../wing/wing';
 

@IonicPage()
@Component({
  selector: 'page-societyregistration',
  templateUrl: 'societyregistration.html',
})
export class SocietyregistrationPage {

  societyName : string = "";
  address : string = "";
  postalCode : string = "";
  city : string = "";
  state : string = "";
  authorities: any={};
  cityList: any = {};
  //owner : boolean;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  postSocietyDetail() {
    this.authorities[firebase.auth().currentUser.uid] = true;
    this.cityList = firebase.firestore().collection("cities").add({
        cityName: this.city,
       societyId: firebase.firestore().collection("societies").doc().id
    }).then((doc) => {
      console.log(doc);
    }).catch((err) => {
      console.log(err);
    });
    firebase.firestore().collection("societies").add({
      //owner_id: firebase.auth().currentUser.uid,
      authorities: this.authorities,
      owner_name: firebase.auth().currentUser.displayName,
      created: firebase.firestore.FieldValue.serverTimestamp(),
      societyName: this.societyName,
      address: this.address,
      postalCode: this.postalCode,
      //city: this.cityList,
      state: this.state
    }).then((doc) => {
      this.navCtrl.push(WingPage);
      console.log(doc);
    }).catch((err) => {
      console.log(err);
    })
  }
}
