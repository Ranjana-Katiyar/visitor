import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


<<<<<<< HEAD

import { UploadimagePage } from '../pages/uploadimage/uploadimage';
=======
import { HomePage } from '../pages/home/home';
>>>>>>> 1d03e377a0dac11cb2534b735e9fc8a198d8fde1

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
<<<<<<< HEAD
  rootPage:any = UploadimagePage;
=======
  rootPage:any = HomePage;
>>>>>>> 1d03e377a0dac11cb2534b735e9fc8a198d8fde1

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

