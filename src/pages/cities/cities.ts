import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import {SocietyregistrationPage} from "../societyregistration/societyregistration";
import { SocietieslistPage } from '../societieslist/societieslist';

@IonicPage()
@Component({
  selector: 'page-cities',
  templateUrl: 'cities.html',
})
export class CitiesPage {
  cities: any[] = [];
  values: any =[];
  city: any = [];
  citylist: any =[];
  socId: any = [];
  uniquecitylist: any = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items();
<<<<<<< HEAD
  }
=======
    this.uniqueCity();
 }
>>>>>>> a66434b709ff998948b1edb082c9513d5f95b617

  items() {
    
      firebase.firestore().collection("cities").orderBy("cityName").get({

      }).then((docs) => {
        docs.forEach((doc) => {
          this.cities.push(doc);
      })
        
        console.log(this.cities);
        

      }).catch((err) => {
        console.log(err);
      })

  }
  
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 135475edaaf2e7059aa73b3ee0cd3065bb868adf
  uniqueCity(){
    firebase.firestore().collection("cities").orderBy("cityName").get().then((snapshot) => {
      snapshot.docs.forEach((doc) => {
          this.citylist.push(doc.data().cityName);
       })
       // list of all the cityNames in cities array
      console.log(this.citylist);
       // list of all the unique elements in citylist array

          this.uniquecitylist =  this.removeDuplicates(this.citylist);
          console.log(this.uniquecitylist);
      
    }).catch((err)=> {
      console.log(err);
    })
  }

<<<<<<< HEAD
=======
  itemSelected() {
      //this.navCtrl.push(SocietieslistPage);
=======
>>>>>>> a66434b709ff998948b1edb082c9513d5f95b617
    allItems (city) {
      firebase.firestore().collection("cities").get().then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            this.citylist.push(doc.data().cityName);
            if(city==doc.data().cityName){
              
              console.log(doc.data().societyId);
            }
        })
      }).catch((err)=> {
        console.log(err);
      })
    }

<<<<<<< HEAD
  // function to remove duplicate elements in citylist array

   removeDuplicates(arr){
      let unique_array = []
      for(let i = 0;i < arr.length; i++){
          if(unique_array.indexOf(arr[i]) == -1){
              unique_array.push(arr[i])
          }
      }
      return unique_array;
  }
  
  

  
  itemSelected(city) {
    console.log(city);
    this.allItems (city);
    // list of all the cityNames in cities array
      console.log(this.citylist);

    // list of all the unique elements in citylist array
    this.remove =  this.removeDuplicates(this.citylist);
    console.log(this.remove);

    //this.navCtrl.push(SocietieslistPage);

=======
>>>>>>> 36348bf14ab1fb5ec296be14f7035c9faa7a3393
>>>>>>> 135475edaaf2e7059aa73b3ee0cd3065bb868adf

  // function to remove duplicate elements in citylist array
  removeDuplicates(arr){
    let unique_array = []
    for(let i = 0;i < arr.length; i++){
        if(unique_array.indexOf(arr[i]) == -1){
            unique_array.push(arr[i])
        }
    }
    return unique_array;
  }


  itemSelected(city) {
    this.navCtrl.push(SocietieslistPage, {data: city});
   }
    
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
     //this.navCtrl.push(SocietieslistPage);
>>>>>>> 89c3d26aace344e27dfe72d781bcbdc15bff4525
>>>>>>> a66434b709ff998948b1edb082c9513d5f95b617
  }
>>>>>>> 135475edaaf2e7059aa73b3ee0cd3065bb868adf



  addSocieties() {
    this.navCtrl.push(SocietyregistrationPage);
    
  }

  goBack(){
      this.navCtrl.pop();
    }

}
