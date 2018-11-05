import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CabdetailsPage } from './cabdetails';

@NgModule({
  declarations: [
    CabdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CabdetailsPage),
  ],
})
export class CabdetailsPageModule {}
