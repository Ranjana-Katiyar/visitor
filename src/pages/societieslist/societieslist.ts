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
  soc: any[] = [];
  //s_name : any[] = [];

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
               // this.socname = doc.data().societyName;
                //this.s_name.push(this.socname);
                //console.log(this.s_name);
                this.socname.push(doc);
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

    itemSelected(soc) {
    this.navCtrl.push(WingslistPage, {data: soc.id});
    }

    goBack(){
      this.navCtrl.pop();
    }

}
