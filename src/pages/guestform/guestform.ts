import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-guestform',
  templateUrl: 'guestform.html',
})
export class GuestformPage {

  name: string="";
  email: string="";
  mobile_number: string="";
  vehicle_number: string="";
  meeting: string="";
  indate: string="";

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

 submit_guest_details(){

    firebase.firestore().collection("guests").add({
     
    owner_name: firebase.auth().currentUser.displayName,
    created: firebase.firestore.FieldValue.serverTimestamp(),
    guestName: this.name,
    email: this.email,
    mobileNumber: this.mobile_number,
    vehicleNumber: this.vehicle_number,
    meeting: this.meeting,
    inDate: this.indate

    }).then((doc) => {
    
      this.toastCtrl.create({
        message: "Details Registered",
        duration: 1000
      }).present();
    
      
    }).catch((err) => {
      console.log(err);
    })
 }
 
  goBack(){
    this.navCtrl.pop();
  }
}
