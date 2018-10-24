import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

/**
 * Generated class for the WatchmanregistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
   postWatchmanDetail() {
     firebase.firestore().collection("watchmans").add({
       owner_id : firebase.auth().currentUser.uid,
       owner_name : firebase.auth().currentUser.displayName,
       created : firebase.firestore.FieldValue.serverTimestamp(),
       firstName : this.firstName,
       lastName : this.lastName,
       phoneNumber : this.phoneNumber,
       registeredOrganization : this.registeredOrganization,
       aadharNumber : this.aadharNumber
     }).then((doc) => {
       console.log(doc);
     }).catch((err) => {
       console.log(err);
     })
   }

}
