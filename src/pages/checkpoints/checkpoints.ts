import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';

import firebase from 'firebase';
import { LoginPage } from "../login/login";
import { GuestformPage } from "../guestform/guestform";
import { CabdetailsPage } from "../cabdetails/cabdetails";
import { ParceldetailsPage } from "../parceldetails/parceldetails";
import { HelperdisplayPage } from '../helperdisplay/helperdisplay';
import { GuestdisplayPage } from '../guestdisplay/guestdisplay';
 

@IonicPage()
@Component({
  selector: 'page-checkpoints',
  templateUrl: 'checkpoints.html',
})
export class CheckpointsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public alertCtrl: AlertController) {
  }

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
     this.alertCtrl.create({
        title: "Select the category",
        buttons: [
          {
            text: "New Guest",
            cssClass: 'buttonClass',
            handler: () => {
              this.navCtrl.push(GuestformPage);
            }
          },
          {
            text: "Old Guest",
            cssClass: 'buttonClass',
            handler: () => {
              this.navCtrl.push(GuestdisplayPage);
            }
          }  
        ]
      }).present();
   
   
  }

  cabDetails(){
    this.navCtrl.push(CabdetailsPage);
  }

  parcelDetails(){
    this.navCtrl.push(ParceldetailsPage);
  }

  goToHelper(){
    this.navCtrl.push(HelperdisplayPage);
  }

  goBack(){
    this.navCtrl.pop();
  }
}
