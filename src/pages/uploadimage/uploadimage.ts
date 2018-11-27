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

    image: string="";
    userId: string="";
    owner_id: string="";
    documentId: string="";

    constructor(public navCtrl: NavController, public navParams: NavParams,
      private camera: Camera, public toastCtrl: ToastController) {
    }

    takePhoto() {
      this.launchCamera();
    }

    uploadPicture() {
      this.openGallery();
    }

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
        console.log(this.image);
        
        
        }).catch((err) => {
          console.log(err);
          })
    }
    openGallery() {
        const options: CameraOptions = {
        quality: 100,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        correctOrientation: true,
        allowEdit: true,
        targetHeight: 312,
        targetWidth: 312
      }

      this.camera.getPicture(options).then((file_uri) => {
        console.log(file_uri);
        
        this.image = "data:image/jpeg;base64," + file_uri;
 
      }).catch((err) => {
        console.log(err);
      })

      
    }

    upload(name:string) {

      return new Promise((resolve, reject) =>{
        let ref = firebase.storage().ref("Images/" + name);
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
          this.navCtrl.push(CitiesPage);
         console.log("The upload is completed");
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            console.log(url);
            firebase.firestore().collection("owners").doc(name).update({
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


  
  

  

    goToNextpage(){
      
      this.navCtrl.push(CitiesPage);
      
    }

    goToNext() {
        
      if(this.image){
          this.userId = firebase.auth().currentUser.uid;
          console.log(this.userId);
          firebase.firestore().collection("owners").orderBy("Name").get().then((snapshot) => {
            snapshot.docs.forEach((doc) => {
                
                if(this.userId==doc.data().owner_id){
                  this.documentId = doc.id;
                  
                }
           })
            console.log(this.documentId);
            this.upload(this.documentId);
          }).catch((err)=> {
            console.log(err);
          })
       }
    }

  goBack(){
    this.navCtrl.pop();
    }

   
 
}