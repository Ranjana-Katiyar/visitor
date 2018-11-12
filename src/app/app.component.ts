import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
<<<<<<< HEAD
//import {HomePage} from "../pages/home/home";
import {CitiesPage} from "../pages/cities/cities";
=======
import {UploadimagePage} from "../pages/uploadimage/uploadimage";
>>>>>>> 00db3fedbe51ef88fde971598d18811f30218edc

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

<<<<<<< HEAD
  rootPage:any = CitiesPage;
=======
  rootPage:any = UploadimagePage;
>>>>>>> 00db3fedbe51ef88fde971598d18811f30218edc


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

