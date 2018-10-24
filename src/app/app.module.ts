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

import firebase from 'firebase';
import { SocietyregistrationPage } from '../pages/societyregistration/societyregistration';
import { WatchmanregistrationPage } from '../pages/watchmanregistration/watchmanregistration';

var config = {
  apiKey: "AIzaSyC0VtVC7j-dgosLEPhO85VbLjAtxP2JJ68",
  authDomain: "visitorauth.firebaseapp.com",
  databaseURL: "https://visitorauth.firebaseio.com",
  projectId: "visitorauth",
  storageBucket: "visitorauth.appspot.com",
  messagingSenderId: "1082078380676"
};

firebase.initializeApp(config);
firebase.firestore().settings({
  timestampsInSnapshots: true
});



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
    UploadimagePage,
    SocietyregistrationPage,
    WatchmanregistrationPage
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
    UploadimagePage,
    SocietyregistrationPage,
    WatchmanregistrationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
