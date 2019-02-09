import { Component } from '@angular/core';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  
})
export class HomePage {
  qrData :null;
  createdCode : null;
  scannedCode : any;
  constructor(private qrScanner: QRScanner,private barCode : BarcodeScanner) { 
  }


  createQrCode()
  {
      this.createdCode =  this.qrData;
      alert( this.createdCode);
  }


  readQrCode()
  {
    this.barCode.scan().then(barcodeData => {
     this.scannedCode = barcodeData.text;
     }).catch(err => {
         console.log('Error', err);
     });
  }

}
