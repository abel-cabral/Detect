import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

interface login{
  email: string,
  password: string
}

@IonicPage({
  name: 'HomePage'
})

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage{
  authenticate: string;
  rootPage: string;

  login: login = {
    email: null,
    password: null,
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad(): void {
    //Le a variavel local
    this.authenticate = JSON.parse(localStorage.getItem('isOn?'));
    console.log(this.authenticate);
    //Se houver resultado positivo de dados de login já redireciona o usuário
    if(this.authenticate){
      this.rootPage = 'HomePage';
    }
  }

  singup():void{
    this.navCtrl.push('SingupPage');
  }

  recovery():void{
    this.navCtrl.push('RecoveryPage');
  }
}
