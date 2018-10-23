import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from "../login/login";
import { UploadimagePage } from "../uploadimage/uploadimage";
 

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

	name:string = "";
	email:string = "";
	mobile:string = "";
	password:string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  getImage
  (){
  	this.navCtrl.push(UploadimagePage);
  }

  onLogin(){
  this.navCtrl.push(LoginPage);
  }

}
