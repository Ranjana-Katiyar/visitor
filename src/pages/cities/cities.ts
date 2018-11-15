import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import {SocietyregistrationPage} from "../societyregistration/societyregistration";

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
  
  remove: any = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items();
   
  
   
    
  }

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
    // allItems (city) {
    //   firebase.firestore().collection("cities").get().then((snapshot) => {
    //     snapshot.docs.forEach((doc) => {
         
    //         if(city==doc.data().cityName){
    //           console.log(doc.data().societyId);
    //         }

    //     })
    //   }).catch((err)=> {
    //     console.log(err);
    //   })
    // }

  itemSelected() {
      //this.navCtrl.push(SocietieslistPage);
=======
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
>>>>>>> 89c3d26aace344e27dfe72d781bcbdc15bff4525
  }

  addSocieties() {
    this.navCtrl.push(SocietyregistrationPage);
    }

    goBack(){
      this.navCtrl.pop();
    }

}
