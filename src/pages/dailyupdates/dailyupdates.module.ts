import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DailyupdatesPage } from './dailyupdates';

@NgModule({
  declarations: [
    DailyupdatesPage,
  ],
  imports: [
    IonicPageModule.forChild(DailyupdatesPage),
  ],
})
export class DailyupdatesPageModule {}
