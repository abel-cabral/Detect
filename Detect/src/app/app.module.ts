import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { LoginPageModule } from '../pages/login/login.module';
import { UserLoginProvider } from '../providers/user-login/user-login';
import { IonicStorageModule } from '@ionic/storage';
import { ChatProvider } from '../providers/chat/chat';
import { TabsPageModule } from './../pages/tabs/tabs.module';
@NgModule({
  declarations: [
    MyApp,        
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Voltar',
      mode: 'ios'
    }),
    LoginPageModule,
    HttpClientModule,   
    TabsPageModule        
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,    
  ],
  providers: [
    
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserLoginProvider,
    ChatProvider,    
  ]
})
export class AppModule {}
