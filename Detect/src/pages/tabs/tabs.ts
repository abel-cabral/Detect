import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root = 'DashboardPage';
  tab2Root = 'PanelPage';
  tab3Root = 'ChatPage';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
