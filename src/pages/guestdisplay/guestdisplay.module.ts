import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GuestdisplayPage } from './guestdisplay';

@NgModule({
  declarations: [
    GuestdisplayPage,
  ],
  imports: [
    IonicPageModule.forChild(GuestdisplayPage),
  ],
})
export class GuestdisplayPageModule {}
