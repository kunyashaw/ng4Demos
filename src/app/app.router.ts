import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Demo18Guard } from './demo18_guard/can_enter.service'
import { Demo05Component } from './demo05/demo05.component'
import { Demo06Component } from './demo06/demo06.component'
import { Demo09Component } from './demo09/demo09.component';
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
import { Demo16Component } from './demo16_service/demo16.component'
import { Demo17Component } from './demo17_http/demo17.component'
import { Demo18Component } from './demo18_guard/demo18.component'
import { Demo19Component } from './demo19_18n/demo19.component'
import { Demo20Component } from './demo20_direcitve/demo20.component'
import { Demo21Component } from './demo21_animate/demo21.component'
import { Demo22Component } from './demo22_lifecycle/demo22.component'
import { Demo23Component } from './demo22_lifecycle/demo23.component'

const routes: Routes = [
    { path: '', component: Demo14ParentComponent },
    { path: 'demo20', component: Demo20Component },
    { path: 'demo21', component: Demo21Component },
    { path: 'demo09', component: Demo09Component },
    { path: 'demo10', component: Demo10Component },
    { path: 'demo11', component: Demo11Component },
    { path: 'demo12/:uName', component: Demo12Component },
    { path: 'testDemo12', component: TestDemo12Component },
    {
        path: 'mail', component: MailComponent, children: [
            { path: '', component: InboxComponent },
            { path: 'inbox', component: InboxComponent },
            { path: 'outbox', component: OutboxComponent },
            { path: '**', component: NotFoundComponent }
        ]
    },
    { path: 'demo14', component: Demo14ParentComponent },
    { path: 'demo15', component: Demo15Component },
    { path: 'demo17', component: Demo17Component },
    { path: 'demo18', component: Demo18Component, canActivate: [Demo18Guard] },
    //最后一个路由中的**路径是一个通配符。当所请求的URL不匹配前面定义的路由表中的任何路径时，路由器就会选择此路由
    //通配符路由的path是两个星号（**），它会匹配任何 URL。 当路由器匹配不上以前定义的那些路由时，它就会选择这个路由。 通配符路由可以导航到自定义的“404 Not Found”组件，也可以重定向到一个现有路由
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }


