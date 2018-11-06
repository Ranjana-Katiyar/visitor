import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HelperPage } from './helper';

@NgModule({
  declarations: [
    HelperPage,
  ],
  imports: [
    IonicPageModule.forChild(HelperPage),
  ],
})
export class HelperPageModule {}
