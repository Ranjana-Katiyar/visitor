import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { CheckpointsPage } from "../checkpoints/checkpoints";
 
import firebase from 'firebase';
import { WatchmanregistrationPage } from '../watchmanregistration/watchmanregistration';

@IonicPage()
@Component({
  selector: 'page-watchmanlogin',
  templateUrl: 'watchmanlogin.html',
})
export class WatchmanloginPage {

  email:string="";
  password:string="";

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  login(){
    firebase.auth().signInWithEmailAndPassword(this.email, this.password)
    .then((data)=>{
      console.log(data)

      this.toastCtrl.create({
        message: "Login Successful",
        duration: 3000
      }).present();
      this.navCtrl.setRoot(CheckpointsPage);

    })
    .catch((err)=>{
      console.log(err)

      this.toastCtrl.create({
        message: err.message,
        duration: 3000
      }).present();

    })
  }

  onsignup(){
    this.navCtrl.push(WatchmanregistrationPage);
    }

}
