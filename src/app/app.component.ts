import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
<<<<<<< HEAD
import { ParceldetailsPage } from '../pages/parceldetails/parceldetails';
//import { OwnerdashboardPage } from '../pages/ownerdashboard/ownerdashboard';
 
=======
import { UploadimagePage } from '../pages/uploadimage/uploadimage';

>>>>>>> 41280c0d2c0a0e9902a81aa909c2e8ce86c433ea

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
 
<<<<<<< HEAD
  rootPage:any = ParceldetailsPage;
=======
  rootPage:any = UploadimagePage;
>>>>>>> 41280c0d2c0a0e9902a81aa909c2e8ce86c433ea

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

