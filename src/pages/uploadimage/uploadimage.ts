import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
 
@IonicPage()
@Component({
  selector: 'page-uploadimage',
  templateUrl: 'uploadimage.html',
})
export class UploadimagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadimagePage');
  }

  takePicture(sourceType:number) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType:sourceType,
    }

    this.camera.getPicture(options).then((imageData) => {
     let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
    });
  }

  //this.takePicture(1);

}
