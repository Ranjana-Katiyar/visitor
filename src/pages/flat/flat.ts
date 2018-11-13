import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import firebase from 'firebase';
import { OwnerdashboardPage } from "../ownerdashboard/ownerdashboard";
import admin from 'firebase-admin';

@IonicPage()
@Component({
  selector: 'page-flat',
  templateUrl: 'flat.html',
})
export class FlatPage {
  authorities: any={};
  flatList: any={}; 
  flat: string="";
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    
  }
    
    
    addNewInputField()
    {
      let doc = admin.firestore().collection("wings").doc(postId).get();
      this.authorities[firebase.auth().currentUser.uid] = true;
      this.flatList = firebase.firestore().collection("flats").add({
        FlatNumber: this.flat,
       
        owner_id: firebase.auth().currentUser.uid
        
    }).then((doc) => {
      console.log(doc);
      this.toastCtrl.create({
        message: "Flat added successfully",
        duration: 1000
      }).present();
     
    }).catch((err) => {
      console.log(err);
    });
    }

    moveToDashboard(){
      this.navCtrl.push(OwnerdashboardPage);
    }
    

   
   
}
