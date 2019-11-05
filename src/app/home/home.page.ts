import { Component } from '@angular/core';
import {FormGroup, Validators, FormControl} from '@angular/forms';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { InformationService } from '../providers/information.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  id = null;
  dob: String = '';
  createdCode = null;
  data : Object;
  scannedCode = null;
  searchForm: FormGroup = new FormGroup({
    demandid: new FormControl (null, Validators.required)
  });
  value: any;
  constructor(private barcodeScanner:BarcodeScanner, private infoService: InformationService) {}
  createCode(){
    if (!this.searchForm.valid) {
      console.log('not possible we have an empty form');
    } else {
         this.infoService.search(JSON.stringify(this.searchForm.value['demandid'])).subscribe(data =>{
           this.createdCode =  'Fullname:'+' '+ data.data.fullname;
          //  + '\n' +' Date of birth: '+ data.data.dob+'\n' +' Address: '+ data.data['address']+ '\n' +'Skills: '+  data.data['skill']+'\n' +' Email Address: '+  data.data['email']+'\n' +' Rank: '+  data.data['rank']+'\n' +' Staff Category: '+  data.data['staff_category']+'\n' +'User type:'+ data['type'] ;
         },
         err => {
           console.log(err);
         }
         )
    }
  }
  scanCode(){
   this.barcodeScanner.scan().then(barcodeData => {
     this.scannedCode = barcodeData.text;
   })
  }
  // createCode(){
  //   this.createdCode = this.id;
  // }
}
