import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
<<<<<<< HEAD
import { HomePage } from '../pages/home/home';
=======


import { UploadimagePage } from '../pages/uploadimage/uploadimage';

>>>>>>> 252cd0dad1a3f0066dd19ec29f34dcc2fc4a9070

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

<<<<<<< HEAD
  rootPage:any = HomePage;
=======
  rootPage:any = UploadimagePage;
>>>>>>> 252cd0dad1a3f0066dd19ec29f34dcc2fc4a9070


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

