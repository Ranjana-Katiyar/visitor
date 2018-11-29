import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HelperoutPage } from '../helperout/helperout';

 
@IonicPage()
@Component({
  selector: 'page-helperin',
  templateUrl: 'helperin.html',
})
export class HelperinPage {

  helpernew: any = {};
   

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.helpernew = navParams.get('data');
    console.log(this.helpernew);
    
  }

  createAlert(helpernew: any){
    this.alertCtrl.create({
      title: 'Are you sure to Out?',
      buttons: [
        {
          text: "Confirm",
          handler: () => {
            this.navCtrl.push(HelperoutPage, {data: helpernew});
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
