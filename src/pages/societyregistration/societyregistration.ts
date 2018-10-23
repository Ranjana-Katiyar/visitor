import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
 

@IonicPage()
@Component({
  selector: 'page-societyregistration',
  templateUrl: 'societyregistration.html',
})
export class SocietyregistrationPage {

  societyName : string = "";
  societyAddress1 : string = "";
  societyAddress2 : string = "";
  postalCode : string = "";
  societyDescription : string = "";
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
      societyAddress1: this.societyAddress1,
      societyAddress2: this.societyAddress2,
      postalCode: this.postalCode,
      societyDescription: this.societyDescription
    }).then((doc) => {
      console.log(doc);
    }).catch((err) => {
      console.log(err);
    })
  }

}
