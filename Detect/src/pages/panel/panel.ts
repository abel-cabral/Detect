import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

declare var google;

@IonicPage()
@Component({
  selector: 'page-panel',
  templateUrl: 'panel.html',
})
export class PanelPage {
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    const position = new google.maps.LatLng(-22.9990991,-43.3671249);

    const mapOptions = {
      zoom: 18,
      center: position,
      disableDefaultUI: true
    }

    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    const marker = new google.maps.Marker({
      position: position,
      map: this.map
    });

  }

  endSession(): void{
    this.storage.set('status', false);
    this.navCtrl.setRoot('LoginPage');
  }

}
