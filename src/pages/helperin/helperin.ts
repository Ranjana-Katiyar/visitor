import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HelperoutPage } from '../helperout/helperout';
import firebase from 'firebase';
 
@IonicPage()
@Component({
  selector: 'page-helperin',
  templateUrl: 'helperin.html',
})
export class HelperinPage {

  helpernew: any = [];
  helperOutList: any = []; 
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.helpernew = navParams.get('data');
    console.log(this.helpernew);
    
  }

  createAlert(helpernew: any){
    this.helperOutList.push(helpernew);
    this.alertCtrl.create({
      title: 'Are you sure to Out?',
      buttons: [
        {
          text: "Confirm",
          handler: () => {
            // firebase.firestore().collection("helperIn").add({
     
            //   created: firebase.firestore.FieldValue.serverTimestamp(),
            //   helperName: this.helpernew.helperName,              
            //   helperType: this.helpernew.helperType,
            //   wingName: this.helpernew.wingName,
            //   flatNumber: this.helpernew.flatNumber
        
            // }).then((doc) => {
              this.navCtrl.push(HelperoutPage, {data: this.helperOutList});
                
              // }).catch((err) =>{
              //   console.log(err);
              // }) 
          
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
