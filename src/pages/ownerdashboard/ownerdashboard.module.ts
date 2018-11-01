import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OwnerdashboardPage } from './ownerdashboard';

@NgModule({
  declarations: [
    OwnerdashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(OwnerdashboardPage),
  ],
})
export class OwnerdashboardPageModule {}
