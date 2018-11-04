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

    google.maps.event.addListener(this.map, 'click', (e) => {
      
      var pointAny = new google.maps.Marker({
        position: e.latLng,
        map: this.map
      });

      console.log('this.markers.length')
      console.log(this.markers.length)
      
      if(this.markers.length == 2) {
        this.deleteMarkers();
      }

      if(this.markers.length == 1) {

        let points = new Array();

        for(var j=0; j<this.markers.length; j++) {
          points.push(this.markers[j].position)
        }

        var polyName = new google.maps.Polyline({
            path: points,
            geodesic: true,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 2
        });

        console.log('polyName')
        console.log(polyName)

        polyName.setMap(this.map);
      }

      this.markers.push(pointAny);
        console.log('this.markers')
      console.log(this.markers)
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
