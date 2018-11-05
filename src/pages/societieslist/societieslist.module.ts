import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SocietieslistPage } from './societieslist';

@NgModule({
  declarations: [
    SocietieslistPage,
  ],
  imports: [
    IonicPageModule.forChild(SocietieslistPage),
  ],
})
export class SocietieslistPageModule {}
