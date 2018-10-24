import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-visitorform',
  templateUrl: 'visitorform.html',
})
export class VisitorformPage {

  name: string="";
  email: string="";
  mobile: string="";
  Date: string="";
  vehicle: string="";
  meeting: string="";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VisitorformPage');
  }
  visitorInfo(){
    firebase.firestore().collection("visitors").add({
     
        : firebase.auth().currentUser.displayName,
      created : firebase.firestore.FieldValue.serverTimestamp(),
      ame: this.name,
      Email : this.email,
      Mobile : this.mobile,
      Date : this.Date,
      vehicle: this.vehicle,
      meeting : this.meeting
      
    }).then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    })
  }
}

 
