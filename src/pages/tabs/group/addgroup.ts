import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { HomeService } from '../../../service/tabs/homeService'
@Component({
  selector: 'page-addgroup',
  templateUrl: 'addgroup.html',
  providers: [HomeService]
})
export class AddGroupPage {

  constructor(public navParam: NavParams) {

  }

  ionViewDidEnter(){
    console.log("AddGroup Page loading...");
  }

  saveGroup(){
    

  }

}
