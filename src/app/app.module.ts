import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.router'
import { HttpModule } from '@angular/http'
import { TranslatePipe } from './translate/translate.pipe';
import { TranslateService } from './translate/translate.service';
import { TRANSLATION_PROVIDERS } from './translate/translations';




import { AppComponent } from './app.component';
import { Demo01Component }
  from './demo01/demo01.component'
import { Demo02Component }
  from './demo02/demo02.component'

import { Demo03Component } from './demo03/demo03.component'
import { Demo04Component } from './demo04/demo04.component'
import { Demo05Component } from './demo05/demo05.component'
import { Demo06Component } from './demo06/demo06.component'
import { Demo07Component } from './demo07/demo07.component'
import { Demo08Component } from './demo08/demo08.component'
import { Demo09Component } from './demo09/demo09.component'
import { Demo10Component } from './demo10/demo10.component'
import { NotFoundComponent } from './demo10/notfound.component'
import { Demo11Component } from './demo11_args/demo11.component'
import { Demo12Component } from './demo12_recargs/demo12.component'
import { TestDemo12Component } from './demo12_recargs/testDemo12.component'
import { MailComponent } from './demo13_embed/mail.component'
import { InboxComponent } from './demo13_embed/inbox.component'
import { OutboxComponent } from './demo13_embed/outbox.component'
import { Demo14ParentComponent } from './demo14_communication/demo14Parent.component'
import { Demo14SonComponent } from './demo14_communication/demo14Son.component'
import { Demo15Component } from './demo15_pipe/demo15.component'
import { Demo15CustomComponent } from './demo15_pipe/demo15_custom_component'
import { SexPipe } from './demo15_pipe/sex.pipe'
import { Demo16Component } from './demo16_service/demo16.component'
import { TestService } from './demo16_service/test.service'
import { Demo17Component } from './demo17_http/demo17.component'
import { Demo18Guard } from './demo18_guard/can_enter.service'
import { Demo18Component } from './demo18_guard/demo18.component'
import { Demo19Component } from './demo19_18n/demo19.component'
import { Demo14SecondSonComponent } from './demo14_communication/demo14SecondSon.component'
import { Demo20Component } from './demo20_direcitve/demo20.component'
import { ChangeBgColorDirective } from './demo20_direcitve/change-bgcolor.direcitve'
import { Demo21Component } from './demo21_animate/demo21.component'
import { Demo22Component } from './demo22_lifecycle/demo22.component'
import { Demo23Component } from './demo22_lifecycle/demo23.component'
import { Demo24Component} from './demo24_all_checked/demo24.component'
@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpModule],
  providers: [TestService, Demo18Guard, TRANSLATION_PROVIDERS, TranslateService],
  declarations: [Demo24Component,ChangeBgColorDirective, AppComponent, SexPipe, TranslatePipe, Demo01Component, Demo02Component, Demo03Component, Demo04Component, Demo05Component, Demo06Component, Demo07Component, Demo08Component, Demo09Component, Demo10Component, NotFoundComponent, Demo11Component, Demo12Component, TestDemo12Component, MailComponent, InboxComponent, OutboxComponent, Demo14ParentComponent, Demo14SonComponent, Demo15Component, Demo15CustomComponent, Demo16Component, Demo17Component, Demo18Component, Demo19Component, Demo14SecondSonComponent, Demo20Component, Demo21Component, Demo22Component, Demo23Component],
  bootstrap: [AppComponent]
})
export class AppModule { }
