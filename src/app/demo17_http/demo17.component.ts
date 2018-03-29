import { Component, OnInit } from '@angular/core';
import { MyHttpService } from './http.service'
@Component({
    selector: 'demo17',
    providers: [MyHttpService],
    template: `
        <input type='text' [(ngModel)]="uName"/>
        <br/>
        <input type='text' [(ngModel)]="uPwd"/>
        <br/>
        <button (click)="login()">登录</button>
        <button (click)="loadData()">加载数据</button>
        <button (click)="getData()">跨域请求本地的数据</button>
        <button (click)="postData()">post</button>
        <ul>
            <li *ngFor="let tmp of list">{{tmp.title}}</li>
        </ul>
    `
})

export class Demo17Component implements OnInit {
    list: any[] = [];
    uName = '';
    uPwd = '';
    constructor(private myHttp: MyHttpService) { }

    ngOnInit() { }

    postData(){
        this.myHttp.sendPostRequest();
    }

    login() {
        this.myHttp.sendRequest('http://localhost/data_vue_admin/user/login.php?uname=zhang&upwd=123')
            .subscribe(function (data) {
                console.log(data);
            })
    }
    loadData() {
        this.myHttp.sendRequest('http://jsonplaceholder.typicode.com/posts')
            .subscribe((data) => {
                console.log(data);
                this.list = data;
            })
    }

    getData() {
        this.myHttp
            .sendRequest("http://localhost/ajia/data/user/session_data.php")
            .subscribe((data) => {
                console.log("异步请求来的数据:", data);
            })

    }
}