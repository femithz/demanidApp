import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { HttpClientModule } from '@angular/common/http';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { InformationService } from './providers/information.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
     BrowserModule,
     IonicModule.forRoot(),
     NgxQRCodeModule,
     HttpClientModule,
     ReactiveFormsModule, 
     FormsModule,
     AppRoutingModule
    ],
  providers: [
    BarcodeScanner,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    InformationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
