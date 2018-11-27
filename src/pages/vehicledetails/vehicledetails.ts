import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import firebase from 'firebase';
 

@IonicPage()
@Component({
  selector: 'page-vehicledetails',
  templateUrl: 'vehicledetails.html',
})
export class VehicledetailsPage {

  v_number: string="";
  owner_id: string="";
  vehfunc: any;
  documentId: string="";

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {}
 
  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Vehicle Number',
      inputs: [
        {
          name: 'title',
          placeholder: 'Vehicle Number'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
           
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Vehicle no saved');
            console.log(data.title);
            this.v_number = data.title;
            this.vehfunc =  this.update_owner();   
            console.log("Function call");
          }
        }
      ]
    });
    prompt.present();
  }

  goBack(){
    this.navCtrl.pop();
  }

  update_owner(){
    this.owner_id = firebase.auth().currentUser.uid;
    firebase.firestore().collection("owners").orderBy("Name").get().then((snapshot) => {
      snapshot.docs.forEach((doc) => {
          
          if(this.owner_id==doc.data().owner_id){
            this.documentId = doc.id;
              firebase.firestore().collection("owners").doc(this.documentId).update({
                vehicleNumber: this.v_number
              }).then(() =>{
               
                console.log("vehicle added to owner");
                
              }).catch((err) =>{
                console.log("error");
              })
            }
          
     
    })
      // end of foreach

    }).catch((err)=> {
      console.log(err);
    })
  }

  submit_vehicle_details(){
    this.navCtrl.pop();
  }

}
