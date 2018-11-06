import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import firebase from 'firebase';
import { LoginPage } from "../login/login";
import { GuestformPage } from "../guestform/guestform";
import { CabdetailsPage } from "../cabdetails/cabdetails";
import { ParceldetailsPage } from "../parceldetails/parceldetails";
 

@IonicPage()
@Component({
  selector: 'page-checkpoints',
  templateUrl: 'checkpoints.html',
})
export class CheckpointsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckpointsPage');
  }

  // goToFlat(){
  //   this.navCtrl.push(FlatnoPage);
  // }

  logOut(){
    firebase.auth().signOut().then(()=>{
      let toast = this.toastCtrl.create({
        message: "Logged out  Successfully",
        duration: 3000
      });
      toast.present();

      this.navCtrl.setRoot(LoginPage);
    });
  }

  guestDetails(){
    this.navCtrl.push(GuestformPage);
  }

  cabDetails(){
    this.navCtrl.push(CabdetailsPage);
  }

  parcelDetails(){
    this.navCtrl.push(ParceldetailsPage);
  }

}
