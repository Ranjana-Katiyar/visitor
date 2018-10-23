import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FlatnoPage } from '../flatno/flatno';

 

@IonicPage()
@Component({
  selector: 'page-checkpoints',
  templateUrl: 'checkpoints.html',
})
export class CheckpointsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckpointsPage');
  }

   goToFlat(){
    this.navCtrl.push(FlatnoPage);
  }


}
