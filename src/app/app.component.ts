import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
<<<<<<< HEAD

import { ParceldetailsPage } from '../pages/parceldetails/parceldetails';

=======
 
import { ParceldetailsPage } from '../pages/parceldetails/parceldetails';
//import { OwnerdashboardPage } from '../pages/ownerdashboard/ownerdashboard';
 
 

 
>>>>>>> ad703377d01ab7ffd4fde8b3df8a7da7d35e0bfc

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
 
<<<<<<< HEAD

  rootPage:any = ParceldetailsPage;

=======
  rootPage:any = ParceldetailsPage;
 
 
>>>>>>> ad703377d01ab7ffd4fde8b3df8a7da7d35e0bfc

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

