import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from "../login/login";
import { WatchmanloginPage } from "../watchmanlogin/watchmanlogin";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  ownerReg(){
    this.navCtrl.push(LoginPage);
   }
   
  watchmanReg(){
   this.navCtrl.push(WatchmanloginPage);
  }

}
