import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SocietydetailsPage } from './societydetails';

@NgModule({
  declarations: [
    SocietydetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(SocietydetailsPage),
  ],
})
export class SocietydetailsPageModule {}
