import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FlatnoPage } from '../flatno/flatno';
import firebase from 'firebase';
import { LoginPage } from "../login/login";
import { VisitorformPage } from "../visitorform/visitorform";
 

@IonicPage()
@Component({
  selector: 'page-checkpoints',
  templateUrl: 'checkpoints.html',
})
export class CheckpointsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckpointsPage');
  }

  // goToFlat(){
  //   this.navCtrl.push(FlatnoPage);
  // }

  logOut(){
    firebase.auth().signOut().then(()=>{
      let toast = this.toastCtrl.create({
        message: "Logged out  Successfully",
        duration: 3000
      }).present();

      this.navCtrl.setRoot(LoginPage);
    });
  }

  goToVisitor(){
    this.navCtrl.push(VisitorformPage);
  }

}
