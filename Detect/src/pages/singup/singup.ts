import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, NavController } from 'ionic-angular';
import { user } from '../../model/user.model';
import { UserLoginProvider } from '../../providers/user-login/user-login';

@IonicPage()
@Component({
  selector: 'page-singup',
  templateUrl: 'singup.html',
})
export class SingupPage implements user {
  //Variaveis do Input      
  name;
  email;
  cpf;
  password;
  status: any;
  constructor(
    public navCtrl: NavController,     
    public viewCtrl: ViewController,
    private UserLoginProvider: UserLoginProvider) {
  }

  ionViewDidLoad() {    
    console.log('ionViewDidLoad SingupPage');
  }

  //Envia os dados para a API
  sendData():void {   
      this.UserLoginProvider.singUp()
      .then(data => {
        this.status = data; 
        if(status){   
          //Cria salva localmente      
          localStorage.setItem('isOn?', 'true');
          //Leva o usuario para Home
          this.navCtrl.push('HomePage');
        }
      });    
  
  }

}
