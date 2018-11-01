import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
 
@IonicPage()
@Component({
  selector: 'page-uploadimage',
  templateUrl: 'uploadimage.html',
})
export class UploadimagePage {

  image: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private camera: Camera) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadimagePage');
  }

  takePhoto() {
    this.launchCamera();
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

    }).catch((err) => {
      console.log(err);
    })
  }



}
