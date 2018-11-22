import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import firebase from 'firebase';
import { LoginPage } from "../login/login";
import { VehicledetailsPage } from "../vehicledetails/vehicledetails";
import { DailyupdateslistPage } from "../dailyupdateslist/dailyupdateslist";
import { HelperPage } from "../helper/helper";


@IonicPage()
@Component({
  selector: 'page-ownerdashboard',
  templateUrl: 'ownerdashboard.html',
})
export class OwnerdashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
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

  addvehicles(){
    this.navCtrl.push(VehicledetailsPage);
  }

  addUpdates(){
    this.navCtrl.push(DailyupdateslistPage);
  }
  
  addHelper(){
    this.navCtrl.push(HelperPage);
  }
}
