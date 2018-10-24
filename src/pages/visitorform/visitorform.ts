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
    let db = firebase.firestore();
    db.collection("visitors").add({
      name: this.name,
      created: firebase.firestore.FieldValue.serverTimestamp(),
      Email: this.email,
      Mobile: this.mobile,
      Meeting: this.meeting,
      Vehicle: this.vehicle,
      Date:this.Date
    }).then((data)=>{
      console.log(data)
    }).catch((err)=>{
      console.log(err)
      })
    }
  }



