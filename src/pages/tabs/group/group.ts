import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeService } from '../../../service/tabs/homeService';
import { AddGroupPage} from './addgroup';

@Component({
  selector: 'page-group',
  templateUrl: 'group.html',
  providers: [HomeService]
})
export class GroupPage {
  public foundRepos;

  constructor(public navCtrl: NavController, private homeservice: HomeService) {

  }

  ionViewDidEnter(){
    console.log("group list loading...");
    this.getGroupCardlist();
  }

  // 그룹리스트 조회
  getGroupCardlist(){
    this.homeservice.findAll().subscribe(
      data => {
      console.log(data);
        this.foundRepos = data.json();
        console.log(this.foundRepos);
      },
      err => console.error(err),
      () => console.log('get book complate!!!!')
    );
  }

  // group 추가
  setGroup(){
    this.navCtrl.push(AddGroupPage,{});
  }



}
