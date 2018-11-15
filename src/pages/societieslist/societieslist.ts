import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import firebase from 'firebase';
import {WingslistPage} from "../wingslist/wingslist";
 



@IonicPage()
@Component({
  selector: 'page-societieslist',
  templateUrl: 'societieslist.html',
})
export class SocietieslistPage {

  societies : any[] = [];
  newCity : any[] = [];
  socname : any[] = [];
   

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items();
    this.newCity = navParams.get('data');
    console.log(this.newCity);
  }

  items() {
    firebase.firestore().collection("societies").get().then((docs) => {
      docs.forEach((doc) => {
        this.societies.push(doc);
      })
      
      firebase.firestore().collection("societies").orderBy("societyName").get().then((snapshot) => {
          snapshot.docs.forEach((doc) => {
              
              if(this.newCity==doc.data().cityname){
                this.socname.push(doc.data().societyName);
                
                console.log(this.socname);
              }

              

              
          })
          
    
        }).catch((err)=> {
          console.log(err);
        })


        //console.log(this.societies);
    }).catch((err) => {
      console.log(err);
    })
  }

    itemSelected() {
    this.navCtrl.push(WingslistPage);
    }

    goBack(){
      this.navCtrl.pop();
    }

}
