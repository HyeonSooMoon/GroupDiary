import { Component } from '@angular/core';
import { Tabs } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public tabs: Tabs) {

  }

  onMenuClick(id){
    if (id == "GD"){
      this.tabs.select(1);
    }

  }


}
