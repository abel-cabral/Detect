import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  authenticate: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    //Le a variavel local
    this.authenticate = JSON.parse(localStorage.getItem('isOn?'));
    console.log(this.authenticate);
    //Se houver resultado positivo de dados de login já redireciona o usuário
    if(this.authenticate){
      this.navCtrl.push('HomePage');
    }
  }

  singup():void{
    this.navCtrl.push('SingupPage');
  }

  recovery():void{
    this.navCtrl.push('RecoveryPage');
  }
}
