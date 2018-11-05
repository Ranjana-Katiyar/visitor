import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

 

@IonicPage()
@Component({
  selector: 'page-parceldetails',
  templateUrl: 'parceldetails.html',
})
export class ParceldetailsPage {

  testRadioOpen: boolean;
  testRadioResult;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParceldetailsPage');
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
