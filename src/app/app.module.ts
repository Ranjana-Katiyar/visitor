import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { CheckpointsPage } from "../pages/checkpoints/checkpoints";
import { FlatnoPage } from '../pages/flatno/flatno';
import { FlatownerPage } from '../pages/flatowner/flatowner';
import { GuestformPage } from "../pages/guestform/guestform";
import { SocietydetailsPage } from "../pages/societydetails/societydetails";
import { UploadimagePage } from "../pages/uploadimage/uploadimage";



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    LoginPage,
    CheckpointsPage,
    FlatnoPage,
    FlatownerPage,
    GuestformPage,
    SocietydetailsPage,
    UploadimagePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    LoginPage,
    CheckpointsPage,
    FlatnoPage,
    FlatownerPage,
    GuestformPage,
    SocietydetailsPage,
    UploadimagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
