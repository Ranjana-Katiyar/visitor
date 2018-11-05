import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

 

@IonicPage()
@Component({
  selector: 'page-vehicledetails',
  templateUrl: 'vehicledetails.html',
})
export class VehicledetailsPage {

  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VehicledetailsPage');
  }

  goBack(){
    this.navCtrl.pop();
  }

  onButtonClick(){
    
  }
  

}
