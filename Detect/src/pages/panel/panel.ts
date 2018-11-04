import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-panel',
  templateUrl: 'panel.html',
})
export class PanelPage{

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  endSession(){
    this.storage.set('status', false);
    this.navCtrl.popToRoot();
    this.navCtrl.setRoot('LoginPage'); 
  }

}
