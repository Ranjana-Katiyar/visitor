import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import firebase from 'firebase';
import { UploadimagePage } from "../uploadimage/uploadimage";

@IonicPage()
@Component({
  selector: 'page-ownerregistration',
  templateUrl: 'ownerregistration.html',
})
export class OwnerregistrationPage {

  name:string = "";
  p_number:string = "";
  email:string ="";
 

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ownerRegister(){
    firebase.firestore().collection("owners").add({
      owner_id : firebase.auth().currentUser.uid,
      owner_name : firebase.auth().currentUser.displayName,
      created : firebase.firestore.FieldValue.serverTimestamp(),
      Name : this.name,
      phoneNumber : this.p_number,
      email: this.email
    }).then((doc) => {
      console.log(doc);
       
      this.toastCtrl.create({
       message: "Registration Successfull",
       duration: 1000
     }).present();
     this.navCtrl.push(UploadimagePage);
  }).catch((err)=>{ 
    console.log(err)
      this.toastCtrl.create({
        message: err.message,
        duration: 3000
      }).present();
  })

 }

  

}

