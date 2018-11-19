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
  addsocietyid: string="";
  wingid: string="";

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    this.addsocietyid = navParams.get('data');
    console.log("Added society:");
    console.log(this.addsocietyid);
  }

  addwing()
  {
    this.authorities[firebase.auth().currentUser.uid] = true;
    this.wingList = firebase.firestore().collection("wings").add({
      wingName: this.wing,
      owner_id: firebase.auth().currentUser.uid,
      addedSocietyId: this.addsocietyid
      
      }).then((doc) => {
        
          console.log(doc);
          this.wingid = doc.id;
          this.wing="";
          
            this.toastCtrl.create({
            message: "Wing added successfully",
            duration: 1000
          }).present();

          this.navCtrl.push(FlatPage, { data: this.wingid });

          }).catch((err) => {
            console.log(err);
          });
    
  }

  

  goBack(){
    this.navCtrl.pop();
  }

}
