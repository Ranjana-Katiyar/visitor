import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import firebase from 'firebase'; 

@IonicPage()
@Component({
  selector: 'page-parceldetails',
  templateUrl: 'parceldetails.html',
})
export class ParceldetailsPage {

  // testRadioOpen: boolean;
  // testRadioResult;

  image: string;
  name: string="";
  vehicle_number: string="";
  mobile_number: string="";
  company: string="";
  intime: string="";

  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController,
    private camera: Camera,) {
   
  }

  submit_parcel_details(){
    firebase.firestore().collection("parcels").add({
     
      owner_name: firebase.auth().currentUser.displayName,
      created: firebase.firestore.FieldValue.serverTimestamp(),
      parcelMenName: this.name,
      mobileNumber: this.mobile_number,
      vehicleNumber: this.vehicle_number,
      company: this.company,
      inTime: this.intime
  
      }).then((doc) => {
      
        this.toastCtrl.create({
          message: "Details Registered",
          duration: 1000
        }).present();
      
        
      }).catch((err) => {
        console.log(err);
      })
  }


  takePhoto() {
    this.launchCamera();
  }
  //Function to launch Camera
  launchCamera() {
    let options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      targetHeight: 512,
      targetWidth: 512,
      allowEdit: true
    }

    this.camera.getPicture(options).then((base64Image) => {
      console.log(base64Image);

      this.image = "data:image/jpeg;base64," + base64Image;

      }).catch((err) => {
        console.log(err);
        })
      
   

  }
  goBack(){
    this.navCtrl.pop();
  }

 

  // doRadio() {
  //   let alert = this.alertCtrl.create();
  //   alert.setTitle('Lightsaber color');

  //   alert.addInput({
  //     type: 'radio',
  //     label: 'Amazon',
  //     value: 'amazon',
  //     checked: true
  //   });

  //   alert.addInput({
  //     type: 'radio',
  //     label: 'Flipkart',
  //     value: 'flipkart'
  //   });

  //   alert.addInput({
  //     type: 'radio',
  //     label: 'Snapdeal',
  //     value: 'Snapdeal'
  //   });

  //   alert.addInput({
  //     type: 'radio',
  //     label: 'Myntra',
  //     value: 'myntra'
  //   });

  //   alert.addInput({
  //     type: 'radio',
  //     label: 'Purple',
  //     value: 'purple'
  //   });

  //   alert.addInput({
  //     type: 'radio',
  //     label: 'White',
  //     value: 'white'
  //   });

  //   alert.addInput({
  //     type: 'radio',
  //     label: 'Black',
  //     value: 'black'
  //   });

  //   alert.addButton('Cancel');
  //   alert.addButton({
  //     text: 'Ok',
  //     handler: data => {
  //       console.log('Radio data:', data);
  //       this.testRadioOpen = false;
  //       this.testRadioResult = data;
  //     }
  //   });

  //   alert.present().then(() => {
  //     this.testRadioOpen = true;
  //   });
  // }

}
