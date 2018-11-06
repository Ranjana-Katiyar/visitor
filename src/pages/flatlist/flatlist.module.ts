import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlatlistPage } from './flatlist';

@NgModule({
  declarations: [
    FlatlistPage,
  ],
  imports: [
    IonicPageModule.forChild(FlatlistPage),
  ],
})
export class FlatlistPageModule {}
