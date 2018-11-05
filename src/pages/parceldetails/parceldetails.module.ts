import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParceldetailsPage } from './parceldetails';

@NgModule({
  declarations: [
    ParceldetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ParceldetailsPage),
  ],
})
export class ParceldetailsPageModule {}
