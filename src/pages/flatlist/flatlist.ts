import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import {OwnerdashboardPage} from "../ownerdashboard/ownerdashboard";
 
@IonicPage()
@Component({
  selector: 'page-flatlist',
  templateUrl: 'flatlist.html',
})
export class FlatlistPage {

  flats: any[] = [];
  selectedwingid: string = "";
  selectedflat: any[]= [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items();
    this.selectedwingid = navParams.get('data');
    console.log("Selected Wing:");
    console.log(this.selectedwingid);
  }


  items() {
    firebase.firestore().collection("flats").get().then((docs) => {
      docs.forEach((doc) => {
        this.flats.push(doc);
      })
                firebase.firestore().collection("flats").orderBy("flatNumber").get().then((snapshot) => {
                  snapshot.docs.forEach((doc) => {
                      
                      if(this.selectedwingid==doc.data().wingId){
                      
                        this.selectedflat.push(doc);
                        console.log(this.selectedflat);
                      }
                })
                  
            
                }).catch((err)=> {
                  console.log(err);
                })
      
      // console.log(this.flats);

    }).catch((err) => {
      console.log(err);
    })
  }

    itemSelected() {
    this.navCtrl.setRoot(OwnerdashboardPage);
    }

    goBack(){
      this.navCtrl.pop();
    }
}
