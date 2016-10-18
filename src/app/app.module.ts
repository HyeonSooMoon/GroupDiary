import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { TabsPage as TabsPage } from '../pages/tabs/tabs';
import { MsgPage as TabMsgPage } from '../pages/tabs/messege/messege';
import { GroupPage as TabGroupPage } from '../pages/tabs/group/group';
import { AddGroupPage as AddGroupPage} from '../pages/tabs/group/addgroup';
import { CalendarPage as TabCalendarPage } from '../pages/tabs/calendar/calendar';
import { SettingPage as TabSettingPage } from '../pages/tabs/setting/setting';
import { HomePage as TabHomePage } from '../pages/tabs/home/home';
import { HSCalendarComponent } from '../directive/calendarcomponent';
@NgModule({
  declarations: [
    MyApp,
    TabMsgPage,
    TabGroupPage,
    AddGroupPage,
    TabCalendarPage,
    TabSettingPage,
    TabHomePage,
    TabsPage,
    HSCalendarComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabMsgPage,
    TabGroupPage,
    AddGroupPage,
    TabCalendarPage,
    TabSettingPage,
    TabHomePage,
    TabsPage,
    HSCalendarComponent
  ],
  providers: []
})
export class AppModule {}
