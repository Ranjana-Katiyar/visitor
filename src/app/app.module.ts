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
import { WatchmanloginPage } from "../pages/watchmanlogin/watchmanlogin";
import { CheckpointsPage } from "../pages/checkpoints/checkpoints";
import { GuestformPage } from "../pages/guestform/guestform";
import { UploadimagePage } from "../pages/uploadimage/uploadimage";
import { OwnerdashboardPage } from "../pages/ownerdashboard/ownerdashboard";

import firebase from 'firebase';
import { SocietyregistrationPage } from '../pages/societyregistration/societyregistration';
import { WatchmanregistrationPage } from '../pages/watchmanregistration/watchmanregistration';
import { OwnerregistrationPage } from "../pages/ownerregistration/ownerregistration";
import { CitiesPage } from "../pages/cities/cities";
import { FileChooser } from '@ionic-native/file-chooser';
import { File } from '@ionic-native/file';
import { SocietieslistPage } from '../pages/societieslist/societieslist';
import { DailyupdatesPage } from '../pages/dailyupdates/dailyupdates';
import { DailyupdateslistPage } from '../pages/dailyupdateslist/dailyupdateslist';
import { VehicledetailsPage } from '../pages/vehicledetails/vehicledetails';
import { CabdetailsPage } from '../pages/cabdetails/cabdetails';
import { ParceldetailsPage } from '../pages/parceldetails/parceldetails';
import { HelperPage } from '../pages/helper/helper';
import { WingslistPage } from "../pages/wingslist/wingslist";
import { FlatlistPage } from "../pages/flatlist/flatlist";
import { HelperdisplayPage } from "../pages/helperdisplay/helperdisplay";
import { GuestdisplayPage } from "../pages/guestdisplay/guestdisplay";
import { FlatPage } from "../pages/flat/flat";
import { WingPage } from "../pages/wing/wing";
import { HelperinPage } from '../pages/helperin/helperin';
import { HelperoutPage } from '../pages/helperout/helperout';
 

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
    GuestformPage,
    UploadimagePage,
    SocietyregistrationPage,
    WatchmanregistrationPage,
    OwnerregistrationPage,
    CitiesPage,
    OwnerdashboardPage,
    SocietieslistPage,
    DailyupdatesPage,
    DailyupdateslistPage,
    VehicledetailsPage,
    CabdetailsPage,
    ParceldetailsPage,
    HelperPage,
      WingslistPage,
      FlatlistPage,HelperdisplayPage, FlatPage, WingPage, WatchmanloginPage, GuestdisplayPage, HelperinPage, HelperoutPage
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
    GuestformPage,
    UploadimagePage,
    SocietyregistrationPage,
    WatchmanregistrationPage,
    OwnerregistrationPage,
    CitiesPage,
    OwnerdashboardPage,
    SocietieslistPage,
    DailyupdatesPage,
    DailyupdateslistPage,
    VehicledetailsPage,
    CabdetailsPage,
    ParceldetailsPage,
    HelperPage,
      WingslistPage,
      FlatlistPage,HelperdisplayPage, FlatPage, WingPage, WatchmanloginPage, GuestdisplayPage, HelperinPage, HelperoutPage  ],
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
