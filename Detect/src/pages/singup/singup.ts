import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, NavController } from 'ionic-angular';
import { user } from '../../model/user.model';
import { UserLoginProvider } from '../../providers/user-login/user-login';
import { HomePage } from '../home/home';
//import { FormBuilder, Validators } from '@angular/forms'; 

@IonicPage()
@Component({
  selector: 'page-singup',
  templateUrl: 'singup.html',
})
export class SingupPage {
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
    private UserLoginProvider: UserLoginProvider) {    
  }
  
  //Envia os dados para a API
  sendData():void {       
      this.UserLoginProvider.singUp(this.send)
      .then(data => {        
        this.status = data; 
        this.UserLoginProvider.welcome(this.status);         
        //Cria salva localmente      
        localStorage.setItem('isOn?', 'true');
        //Leva o usuario para Home
        this.navCtrl.push(HomePage);        
      }); 
  }
}

