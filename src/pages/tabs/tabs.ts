import { Component } from '@angular/core';

import { HomePage } from './home/home';
import { CalendarPage } from './calendar/calendar';
import { GroupPage } from './group/group';
import { MsgPage } from './messege/messege';
import { SettingPage } from './setting/setting';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab0Root: any = HomePage;
  tab1Root: any = GroupPage;
  tab2Root: any = CalendarPage;
  tab3Root: any = MsgPage;
  tab4Root: any = SettingPage;

  constructor() {

  }

  tabClick(inx){
    console.log(inx);
    if(inx == 1)
      this.tab0Root.getGroupCardlist(this);
  }

}
