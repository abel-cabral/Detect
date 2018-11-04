import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { HomePage } from '../home/home';



@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  data = { type:'', nickname:'', message:'' };
  chats = [];
  roomkey:string;
  nickname:string;
  offStatus:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  exitChat(): void {      
    this.navCtrl.setRoot('HomePage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

}
