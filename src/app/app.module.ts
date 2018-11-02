import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';

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
import { OwnerdashboardPage } from "../pages/ownerdashboard/ownerdashboard";

import firebase from 'firebase';
import { SocietyregistrationPage } from '../pages/societyregistration/societyregistration';
import { WatchmanregistrationPage } from '../pages/watchmanregistration/watchmanregistration';
import { VisitorformPage } from "../pages/visitorform/visitorform";
import { OwnerregistrationPage } from "../pages/ownerregistration/ownerregistration";
import { CitiesPage } from "../pages/cities/cities";
import { FileChooser } from '@ionic-native/file-chooser';
import { File } from '@ionic-native/file';

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
    WatchmanregistrationPage,
    VisitorformPage,
    OwnerregistrationPage,
    CitiesPage,
    OwnerdashboardPage
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
    WatchmanregistrationPage,
    VisitorformPage,
    OwnerregistrationPage,
    CitiesPage,
    OwnerdashboardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    FileChooser,
    File,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
