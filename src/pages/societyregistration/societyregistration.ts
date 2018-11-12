import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
 
import { OwnerdashboardPage } from '../ownerdashboard/ownerdashboard';
 

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
  state : string = ""
  authoraties: any={};
  //owner : boolean;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  postSocietyDetail() {
    this.authoraties[firebase.auth().currentUser.uid] = true;
    firebase.firestore().collection("societies").add({
      //owner_id: firebase.auth().currentUser.uid,
      authoraties: this.authoraties,
      owner_name: firebase.auth().currentUser.displayName,
      created: firebase.firestore.FieldValue.serverTimestamp(),
      societyName: this.societyName,
      address: this.address,
      postalCode: this.postalCode,
      city: this.city,
      state: this.state
    }).then((doc) => {
      this.navCtrl.push(OwnerdashboardPage);
      console.log(doc);
    }).catch((err) => {
      console.log(err);
    })
  }
}
