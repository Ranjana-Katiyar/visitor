import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { LoginPage } from "../login/login";

import firebase from 'firebase';
import {CitiesPage} from "../cities/cities";

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

	name:string = "";
	email:string = "";
	password:string = "";
  mobile:string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup(){
    console.log(this.name, this.email, this.password);
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
    .then((data)=>{ 
                    console.log(data) 
                    let newUser: firebase.User = data.user;
                    newUser.updateProfile({
                      displayName: this.name, 
                      photoURL: ""
                    })
                    .then(()=>{
                                console.log("Profile Updated") 
                                let user = firebase.auth().currentUser;
                                user.sendEmailVerification();
                                
                                this.toastCtrl.create({
                                  message: "Verification mail sent",
                                  duration: 1000
                                }).present();

                                 this.navCtrl.push(CitiesPage);


                                
                    })
                    .catch((err)=>{ 
                      console.log(err)
                        this.toastCtrl.create({
                          message: err.message,
                          duration: 3000
                        }).present();
                    })

    })
    .catch((err)=>{ console.log(err)
                    this.toastCtrl.create({
                    message: err.message,
                    duration: 3000
                  }).present();
    })
  }

  onLogin(){
  this.navCtrl.push(LoginPage);
  }

}
