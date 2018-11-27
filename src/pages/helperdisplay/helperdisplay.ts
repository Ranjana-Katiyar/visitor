import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-helperdisplay',
  templateUrl: 'helperdisplay.html',
})
export class HelperdisplayPage {

  helpers : any[] = [];
  name: string="";
  helpername : any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public modalCtrl: ModalController) {
    this.helperdetails();
  }

  helperdetails(){
    firebase.firestore().collection("helpers").orderBy("helperName").get().then((docs) => {
      docs.forEach((doc) => {
        this.helpers.push(doc);
      })  
      console.log("Helpers List")
      console.log(this.helpers);
       
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

  goBack(){
    this.navCtrl.pop();
  }

}
