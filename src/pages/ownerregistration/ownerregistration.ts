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
  password:string = "";
	myValue:string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    this.ownerRegister();
  }

  ownerRegister(){
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

                                firebase.firestore().collection("owners").add({
                                  owner_id : firebase.auth().currentUser.uid,
                                  owner_name : firebase.auth().currentUser.displayName,
                                  created : firebase.firestore.FieldValue.serverTimestamp(),
                                  Name : this.name,
                                  phoneNumber : this.p_number,
                                  email: this.email
                                }).then((doc) => {
                                  console.log(doc);
                                  this.myValue=doc.id; 
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


  getMyValue() {
    return this.myValue;
  }
  

}

