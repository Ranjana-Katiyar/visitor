import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlatPage } from './flat';

@NgModule({
  declarations: [
    FlatPage,
  ],
  imports: [
    IonicPageModule.forChild(FlatPage),
  ],
})
export class FlatPageModule {}
