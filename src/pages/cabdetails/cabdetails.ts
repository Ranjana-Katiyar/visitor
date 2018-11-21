import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import firebase from 'firebase';
 

@IonicPage()
@Component({
  selector: 'page-cabdetails',
  templateUrl: 'cabdetails.html',
})
export class CabdetailsPage {

  name: string="";
  vehicle_number: string="";
  company: string="";
  bookie_name: string="";

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  submit_cab_details(){
    firebase.firestore().collection("cabs").add({
     
      owner_name: firebase.auth().currentUser.displayName,
      created: firebase.firestore.FieldValue.serverTimestamp(),
      cabDriverName: this.name,
      vehicleNumber: this.vehicle_number,
      company: this.company,
      bookieName: this.bookie_name
  
      }).then((doc) => {
      
        this.toastCtrl.create({
          message: "Cab Details Registered",
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
