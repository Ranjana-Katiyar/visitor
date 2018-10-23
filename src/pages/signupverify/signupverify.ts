import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from "../login/login";
import firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-signupverify',
  templateUrl: 'signupverify.html',
})
export class SignupverifyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupverifyPage');
  }

  goToLogin(){
  	firebase.auth().currentUser.reload();
  	if (firebase.auth().currentUser.emailVerified) {
      console.log("Email Verified!");
      this.navCtrl.setRoot(LoginPage);
  	}
  }


}
