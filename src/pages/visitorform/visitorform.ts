import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { FileChooser } from '@ionic-native/file-chooser';

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
  picture: string="";

  constructor(public navCtrl: NavController, public navParams: NavParams, private fileChooser: FileChooser) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VisitorformPage');
  }
  visitorInfo(){
    let db = firebase.firestore();
    db.collection("visitors").add({
      VisitorId: firebase.auth().currentUser.uid,
      created: firebase.firestore.FieldValue.serverTimestamp(),
      name: this.name,
      Email: this.email,
      Mobile: this.mobile,
      Meeting: this.meeting,
      Vehicle: this.vehicle,
      Date: this.Date,
      Picture: this.picture
    }).then((data)=>{
      console.log(data)
    }).catch((err)=>{
      console.log(err)
      })
    }

    takePhoto(){
     this.fileChooser.open()
      .then((uri) =>{
        console.log(uri);
        
      })
      .catch((e) => {
        console.log(e)
      });
    }

  }



