import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-helper',
  templateUrl: 'helper.html',
})
export class HelperPage {

  image: string;
  userId: string="";
  name: string="";
  mobile_number: string="";
  helper_type: string="";
  wing: string="";
  flat: string="";

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController,
    private camera: Camera) {
  }

  submit_helper_details(){
     
      firebase.firestore().collection("helpers").add({
     
      owner_name: firebase.auth().currentUser.displayName,
      created: firebase.firestore.FieldValue.serverTimestamp(),
      helperName: this.name,
      mobileNumber: this.mobile_number,
      helperType: this.helper_type,
      wingName: this.wing,
      flatNumber: this.flat

    }).then((doc) => {
        if(this.image){
          
          this.upload(doc.id);
        }
        
        this.toastCtrl.create({
        message: "Details Registered",
        duration: 1000
      }).present();

      
      
    }).catch((err) => {
      console.log(err);
    })

  }

  //Function to launch Camera
  takePhoto() {
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

  // Upload Image in Fire Storage for launchCamera() function
  upload(name:string) {

    return new Promise((resolve, reject) =>{
      let ref = firebase.storage().ref("Helpers/" + name);
      let uploadTask = ref.putString(this.image.split(',')[1], "base64");
      uploadTask.on("state_changed", (taskSnapshot) => {
        console.log(taskSnapshot)
      }, (error) => {
        console.log(error)
      }, () => {
        this.toastCtrl.create({
          message: "Photo Uploaded",
          duration: 1000
        }).present();
        console.log("The upload is completed");
        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
          console.log(url);
          firebase.firestore().collection("helpers").doc(name).update({
            image: url
          }).then(() =>{
           
            resolve()
            
          }).catch((err) =>{
            reject()
          })
        }).catch((err) =>{
          reject()
        })
      })
    })
}

  goBack(){
    this.navCtrl.pop();
  }
}
