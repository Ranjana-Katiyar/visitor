import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import {FlatlistPage} from "../flatlist/flatlist";

 

@IonicPage()
@Component({
  selector: 'page-wingslist',
  templateUrl: 'wingslist.html',
})
export class WingslistPage {

  wings : any[] = [];
  selectedsocid : any[] = [];
  wingnames: any[] = [];
  wingsel: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items();
    this.selectedsocid = navParams.get('data');
    console.log("Selected society:");
    console.log(this.selectedsocid);
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad WingslistPage');
  // }

  items() {
    firebase.firestore().collection("wings").get().then((docs) => {
      docs.forEach((doc) => {
        this.wings.push(doc);
      })

                firebase.firestore().collection("wings").orderBy("wingName").get().then((snapshot) => {
                  snapshot.docs.forEach((doc) => {
                      
                      if(this.selectedsocid==doc.data().addedSocietyId){
                       
                        this.wingnames.push(doc);
                        console.log(this.wingnames);
                      }
                })
                  
            
                }).catch((err)=> {
                  console.log(err);
                })

        //console.log(this.wings);

    }).catch((err) => {
      console.log(err);
    })
  }

    itemSelected(wingsel) {
    this.navCtrl.push(FlatlistPage, {data: wingsel.id});
    }

    goBack(){
      this.navCtrl.pop();
    }
}
