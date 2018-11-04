import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserLoginProvider } from '../../providers/user-login/user-login';
import { loginUser } from '../../model/user_login.model';
import { Storage } from '@ionic/storage';

@IonicPage({
  name: 'DashboardPage'
})

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage{
  authenticate: string;
  rootPage: string;
  status: any;

  login: loginUser = {
    email: null,
    password: null,
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: Storage,
    public UserLoginProvider: UserLoginProvider) {}

  ionViewDidLoad(): void {
    this.status = this.storage.get('status').then((val) => {
      if(val){
        this.navCtrl.setRoot('PanelPage');  
      }
    });    
    
  }

  singIn():void{
    this.UserLoginProvider.singIn(this.login)
    .then(data => {        
      console.log(data);   
      this.navCtrl.setRoot('PanelPage');                     
    }), err => {
      alert('Houve um erro :/');
      console.log(err);
    };    
  }

  singup():void{
    this.navCtrl.push('SingupPage');
  }

  recovery():void{
    this.navCtrl.push('RecoveryPage');
  }
}
