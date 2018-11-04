import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserLoginProvider } from '../../providers/user-login/user-login';
import { loginUser } from '../../model/user_login.model';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage{  
  status: any;
  
  login: loginUser = {
    email: null,
    password: null,
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: Storage,
    public UserLoginProvider: UserLoginProvider) {      
      
    }
  ionViewDidLoad() {
    this.status = this.storage.get('status').then((val) => {      
      if(val){       
        this.nextForRoot('PanelPage');
      }
    });    
  }

  singIn(){
    this.UserLoginProvider.singIn(this.login)
    .then(data => {               
      this.nextForRoot('PanelPage');       
    }), err => {
      alert('Houve um erro :/');
      console.log(err);
    };    
  }

  nextForRoot(name: string){
    this.navCtrl.setRoot(name);
  }
   
   pushPage(name:string){
    this.navCtrl.push(name);
  }
  
  singup(){
    this.navCtrl.push('SingupPage');
  }

  recovery(){
    this.navCtrl.push('RecoveryPage');
  }
}
