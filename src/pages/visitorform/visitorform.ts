import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert } from 'ionic-angular';
import firebase from 'firebase';
import { FileChooser } from '@ionic-native/file-chooser';
import { File } from '@ionic-native/file';

@IonicPage()
@Component({
  selector: 'page-visitorform',
  templateUrl: 'visitorform.html',
})
export class VisitorformPage {

  name: string="";
  email: string="";
  mobile: string="";
  Date: string="";
  vehicle: string="";
  meeting: string="";
  picture: string="";

  constructor(public navCtrl: NavController, public navParams: NavParams, private fileChooser: FileChooser, private file: File) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VisitorformPage');
  }
  visitorInfo(){
    let db = firebase.firestore();
    db.collection("visitors").add({
      VisitorId: firebase.auth().currentUser.uid,
      created: firebase.firestore.FieldValue.serverTimestamp(),
      name: this.name,
      Email: this.email,
      Mobile: this.mobile,
      Meeting: this.meeting,
      Vehicle: this.vehicle,
      Date: this.Date,
      Picture: this.picture
    }).then((data)=>{
      console.log(data)
    }).catch((err)=>{
      console.log(err)
      })
    }

    takePhoto(){
     this.fileChooser.open()
      .then((uri) =>{
        alert(uri);
        
        this.file.resolveLocalFilesystemUrl(uri).then((newurl)=>{
          alert(JSON.stringify(newurl));

          let dirpath = newurl.nativeURL;
          let dirpathsegments = dirpath.split('/');
          dirpathsegments.pop();
          dirpath = dirpathsegments.join('/');
          this.file.readAsArrayBuffer(dirpath, newurl.name).then(async (buffer)=>{
            await this.upload(buffer, newurl.name);
          })
        })

      })
      .catch((e) => {
        console.log(e)
      });
    }

    async upload(buffer, name){
      let blob = new Blob([buffer], {type: "image/jpeg"});
      let storage = firebase.storage();
      storage.ref('images/' + name).put(blob).then((d)=>{
        alert("Done");

      }).catch((error)=>{
        alert(JSON.stringify(error))
      })
    }

  }



