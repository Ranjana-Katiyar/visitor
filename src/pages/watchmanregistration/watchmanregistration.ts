import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import firebase from 'firebase';
import { CheckpointsPage } from "../checkpoints/checkpoints";



@IonicPage()
@Component({
  selector: 'page-watchmanregistration',
  templateUrl: 'watchmanregistration.html',
})
export class WatchmanregistrationPage {
  firstName : string = "";
  lastName : string = "";
  phoneNumber : string = "";
  registeredOrganization : string = "";
  aadharNumber : string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }
  //  postWatchmanDetail() {
  //    firebase.firestore().collection("watchmans").add({
  //      owner_id : firebase.auth().currentUser.uid,
  //      owner_name : firebase.auth().currentUser.displayName,
  //      created : firebase.firestore.FieldValue.serverTimestamp(),
  //      firstName : this.firstName,
  //      lastName : this.lastName,
  //      phoneNumber : this.phoneNumber,
  //      registeredOrganization : this.registeredOrganization,
  //      aadharNumber : this.aadharNumber
  //    }).then((doc) => {
  //      console.log(doc);
  //      this.navCtrl.setRoot(CheckpointsPage);
  //      this.toastCtrl.create({
  //       message: "Registration Successfull",
  //       duration: 1000
  //     }).present();
     
  //    }).catch((err)=>{ 
  //     console.log(err)
  //       this.toastCtrl.create({
  //         message: err.message,
  //         duration: 3000
  //       }).present();
  //   })
  
  //  }

  postWatchmanDetail() {
    this.navCtrl.setRoot(CheckpointsPage);
  }

}
