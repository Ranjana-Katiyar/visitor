import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WingslistPage } from './wingslist';

@NgModule({
  declarations: [
    WingslistPage,
  ],
  imports: [
    IonicPageModule.forChild(WingslistPage),
  ],
})
export class WingslistPageModule {}
