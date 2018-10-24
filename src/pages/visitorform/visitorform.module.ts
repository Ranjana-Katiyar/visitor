import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VisitorformPage } from './visitorform';

@NgModule({
  declarations: [
    VisitorformPage,
  ],
  imports: [
    IonicPageModule.forChild(VisitorformPage),
  ],
})
export class VisitorformPageModule {}
