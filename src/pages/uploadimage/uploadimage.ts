import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { CitiesPage } from '../cities/cities';

import firebase from 'firebase';
 
@IonicPage()
@Component({
  selector: 'page-uploadimage',
  templateUrl: 'uploadimage.html',
})
export class UploadimagePage {

    image: string;
    imageSrc: string;

    constructor(public navCtrl: NavController, public navParams: NavParams,
      private camera: Camera, public toastCtrl: ToastController) {
    }


    ionViewDidLoad() {
      console.log('ionViewDidLoad UploadimagePage');
    }

    takePhoto() {
      this.launchCamera();
    }

    uploadPicture() {
      this.openGallery();
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

          if(this.image){
            await this.upload(base64Image);
          }

        }).catch((err) => {
          console.log(err);
          })
    }

    //Function to open gallery
    openGallery() {
      let CameraOptions: CameraOptions = {
        quality: 100,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        correctOrientation: true,
        targetHeight: 512,
        targetWidth: 512
      }

      this.camera.getPicture(CameraOptions).then((file_uri) => {
        console.log(file_uri);
        
        this.imageSrc = file_uri;

        if(this.image){
         await this.upload(file_uri);
        }

      }).catch((err) => {
        console.log(err);
      })

      
    }


    // Upload Image in Fire Storage for launchCamera() function
    upload(name:string) {

      return new Promise((resolve, reject) =>{
        let ref = firebase.storage().ref("postImages/" + name);

        let uploadTask = ref.putString(this.image.split(',')[1], "base64");
  
        uploadTask.on("state_changed", (taskSnapshot) => {
          console.log(taskSnapshot)
        }), (error) => {
          console.log(error)
        }, () => {
          console.log("The upload is completed");
  
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            console.log(url);
            firebase.firestore().collection("owners").doc(name).update({
              image: url
            }).then(() => {
              resolve()
            }).catch((err) => {
              reject()
            })
          }).catch((err) => {
            reject()
        }
      })

      
    }

    goToNextpage(){
      this.navCtrl.push(CitiesPage);
    }

    goToNext() {
      this.navCtrl.push(CitiesPage);
    }
}