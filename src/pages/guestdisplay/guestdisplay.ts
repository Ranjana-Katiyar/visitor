import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import firebase from 'firebase';
 

@IonicPage()
@Component({
  selector: 'page-guestdisplay',
  templateUrl: 'guestdisplay.html',
})
export class GuestdisplayPage {

  guests : any[] = [];
  name: string="";
  guestName : any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.helperdetails();
  }

    helperdetails(){
      firebase.firestore().collection("guests").orderBy("guestName").get().then((docs) => {
        docs.forEach((doc) => {
          this.guests.push(doc);
        })  
        console.log("Guests List")
        console.log(this.guests);
         
      }).catch((err) => {
        console.log(err);
      })
    }
  
    createAlert(){
      this.alertCtrl.create({
        title: 'Are you sure?',
        buttons: [
          {
            text: "Confirm",
            handler: () => {
               
            }
          },
          {
            text: "Cancel",
            role: 'cancel',
            handler: () => {
               
            }
          }  
        ]
      }).present();
    }

    
  
  

}
