import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxQRCodeModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {

}

