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
  image: string;

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
      if(this.image){
        this.upload(doc.id);
      }
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

 // Upload Image in Fire Storage for launchCamera() function
 upload(name:string) {

  return new Promise((resolve, reject) =>{
    let ref = firebase.storage().ref("Images/" + name);
    let uploadTask = ref.putString(this.image.split(',')[1], "base64");
    uploadTask.on("state_changed", (taskSnapshot) => {
      console.log(taskSnapshot)
    }, (error) => {
      console.log(error)
    }, () => {
      console.log("The upload is completed");
      uploadTask.snapshot.ref.getDownloadURL().then((url) => {
        console.log(url);
        firebase.firestore().collection("owners").doc(name).update({
          image: url
        }).then(() =>{
          resolve()
        }).catch((err) =>{
          reject()
        })
      }).catch((err) =>{
        reject()
      })
    })
  })
}

}

