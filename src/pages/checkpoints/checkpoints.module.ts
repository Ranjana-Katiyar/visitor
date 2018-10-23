import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckpointsPage } from './checkpoints';

@NgModule({
  declarations: [
    CheckpointsPage,
  ],
  imports: [
    IonicPageModule.forChild(CheckpointsPage),
  ],
})
export class CheckpointsPageModule {}
