import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
<<<<<<< HEAD
import {SocietyregistrationPage} from "../pages/societyregistration/societyregistration";
=======
 

import {HomePage} from "../pages/home/home";
>>>>>>> 6679716c05a2fcbcd2aae847da8a7b75df41e6d0




@Component({
  templateUrl: 'app.html'
})
export class MyApp {


<<<<<<< HEAD
  rootPage:any = SocietyregistrationPage;
=======
 // rootPage:any = HomePage;
  rootPage:any = HomePage;
>>>>>>> 6679716c05a2fcbcd2aae847da8a7b75df41e6d0





  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

