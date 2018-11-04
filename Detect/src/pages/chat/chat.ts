import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  mensagem: string;
  chat = {
    isMe: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  print(text:string){
    this.chat.isMe = text;
    return '';
  }

  exitChat(): void {      
    this.navCtrl.setRoot('HomePage');
  }  
}
