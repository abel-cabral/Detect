import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserLoginProvider } from '../../providers/user-login/user-login';
import { loginUser } from '../../model/user_login.model';


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
    public UserLoginProvider: UserLoginProvider) {}

  ionViewDidLoad(): void {
    //Le a variavel local
    //this.authenticate = JSON.parse(localStorage.getItem('isOn?'));    
    //Se houver resultado positivo de dados de login já redireciona o usuário
      
    //if(this.authenticate == 'true'){
      //this.navCtrl.push('DashboardPage');
      
    //}
  }

  singIn():void{
    this.UserLoginProvider.singIn(this.login)
    .then(data => {        
      this.status = data;                        
    }); 
    alert("sds");
  }

  singup():void{
    this.navCtrl.push('SingupPage');
  }

  recovery():void{
    this.navCtrl.push('RecoveryPage');
  }
}
