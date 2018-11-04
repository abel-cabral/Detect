import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, NavController } from 'ionic-angular';
import { user } from '../../model/user.model';
import { UserLoginProvider } from '../../providers/user-login/user-login';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-singup',
  templateUrl: 'singup.html',
})
export class SingupPage{
  //Variaveis do Input      
  send:user = {
    name: null,
    email: null,
    cpf: null,
    password: null
  };
  pass_cmp: null;
    
  status: any;
  constructor(
    public navCtrl: NavController,     
    public viewCtrl: ViewController,
    public navParams: NavParams,
    private UserLoginProvider: UserLoginProvider,
    public storage: Storage) {    
  }
  
  //Envia os dados para a API
  sendData():void {       
      this.UserLoginProvider.singUp(this.send)
      .then(data => {        
        this.status = data; 
        this.UserLoginProvider.welcome(this.status);         
        //Cria salva localmente      
        this.storage.set('status', true);
        //Leva o usuario para Home        
        this.navCtrl.setRoot('PanelPage');        
      }); 
  }
}

