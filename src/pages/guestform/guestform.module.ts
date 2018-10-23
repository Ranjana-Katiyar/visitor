import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GuestformPage } from './guestform';

@NgModule({
  declarations: [
    GuestformPage,
  ],
  imports: [
    IonicPageModule.forChild(GuestformPage),
  ],
})
export class GuestformPageModule {}
