import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import firebase from 'firebase';
import { FlatPage } from '../flat/flat';
 
@IonicPage()
@Component({
  selector: 'page-wing',
  templateUrl: 'wing.html',
})
export class WingPage {
  authorities: any={};
  wingList: any={}; 
  wing: string="";
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  addwing()
  {
    this.authorities[firebase.auth().currentUser.uid] = true;
    this.wingList = firebase.firestore().collection("wings").add({
      wingName: this.wing,
      owner_id: firebase.auth().currentUser.uid
      
  }).then((doc) => {
    console.log(doc);
    this.wing="";
    this.toastCtrl.create({
      message: "Wing added successfully",
      duration: 1000
    }).present();
    this.navCtrl.push(FlatPage);
  }).catch((err) => {
    console.log(err);
  });
  }

  addNewWing(){
    this.navCtrl.pop();
  }

  goBack(){
    this.navCtrl.pop();
  }

}
