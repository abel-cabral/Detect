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
  markers = new Array();

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    const positionA = new google.maps.LatLng(-22.9990991,-43.3671249);

    const mapOptions = {
      zoom: 18,
      center: positionA,
      disableDefaultUI: true
    }

    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var i = 0;

    google.maps.event.addListener(this.map, 'click', (e) => {
      i++;
      if(i == 2) {
        i = 0;
        this.deleteMarkers();
      }
      var pointAny = new google.maps.Marker({
        position: e.latLng,
        map: this.map
      });


      this.map.event.addPolyline({
          points: pointAny,
          'color' : '#AA00FF',
          'width': 10,
          'geodesic': true
      });


      console.log(pointAny)
      this.markers.push(pointAny);
    });

  }

  setMapOnAll(map) {
   for (var i = 0; i < this.markers.length; i++) {
     this.markers[i].setMap(map);
   }
  }

 clearMarkers() {
   this.setMapOnAll(null);
 }

 deleteMarkers() {
    this.clearMarkers();
    this.markers = [];
  }



  endSession(): void{
    this.storage.set('status', false);
    this.navCtrl.setRoot('LoginPage');
  }
}
