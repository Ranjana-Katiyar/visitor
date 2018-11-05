import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
 

@IonicPage()
@Component({
  selector: 'page-parceldetails',
  templateUrl: 'parceldetails.html',
})
export class ParceldetailsPage {

  // testRadioOpen: boolean;
  // testRadioResult;
  image: string;
    imageSrc: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private camera: Camera,) {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParceldetailsPage');
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
