import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'mail',
    template: `
            <h1>邮箱主页面</h1>
            <a routerLink="/mail/inbox">收件箱</a>
            <a routerLink="/mail/outbox">发件箱</a>
            <a routerLink="/mail/asdfsdf">垃圾箱</a>
            <router-outlet> </router-outlet>
        `
})

export class MailComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}