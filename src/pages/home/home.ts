import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from "../login/login";
import { WatchmanloginPage } from "../watchmanlogin/watchmanlogin";
//import { OwnerregistrationPage} from '../ownerregistration/ownerregistration';
//import { WatchmanregistrationPage } from '../watchmanregistration/watchmanregistration';
//import { SignupPage } from '../signup/signup';

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
