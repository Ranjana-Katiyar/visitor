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
  updatewing: any[] = [];
  societyname: string = "";
  societyAddedId: string ="";
  // myId: string = "";
  // private docRef: firebase.firestore.DocumentReference;
  //owner : boolean;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  postSocietyDetail() {
    // this.docRef = firebase.firestore().collection("societies").doc();
    // this.myId = this.docRef.id;
    this.authorities[firebase.auth().currentUser.uid] = true;
    // this.cityList = firebase.firestore().collection("cities").add({
    //     cityName: this.city,
      //  societyId: this.myId
    // }).then((doc) => {
    //   console.log(doc);
    // }).catch((err) => {
    //   console.log(err);
    // });
    firebase.firestore().collection("societies").add({
      //owner_id: firebase.auth().currentUser.uid,
      authorities: this.authorities,
      owner_name: firebase.auth().currentUser.displayName,
      created: firebase.firestore.FieldValue.serverTimestamp(),
      societyName: this.societyName,
      address: this.address,
      postalCode: this.postalCode,
      cityname: this.city,
      state: this.state
    }).then((doc) => {
      this.cityList = firebase.firestore().collection("cities").add({
        cityName: this.city,
        societyId: doc.id
    }).then((doc) => {
      
      console.log(doc);
      
    }).catch((err) => {
      console.log(err);
    });
      console.log("Society Registered");
     console.log(doc);
     this.societyAddedId = doc.id;
     this.navCtrl.push(WingPage, {data: this.societyAddedId});
    
    }).catch((err) => {
      console.log(err);
    })
  }

  goBack(){
    this.navCtrl.pop();
  }
}
