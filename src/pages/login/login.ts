import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import firebase from 'firebase';
import { OwnerregistrationPage } from '../ownerregistration/ownerregistration';

import { OwnerdashboardPage } from '../ownerdashboard/ownerdashboard';
 
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	
  email:string="";
  password:string="";

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    firebase.auth().signInWithEmailAndPassword(this.email, this.password)
    .then((data)=>{
      console.log(data)

      this.toastCtrl.create({
        message: "Login Successful",
        duration: 3000
      }).present();
      this.navCtrl.setRoot(OwnerdashboardPage);

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
  this.navCtrl.push(OwnerregistrationPage);
  }

}
