import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service'

@Component({
    selector: 'demo16',
    //providers: [TestService],
    template: `
        <h2>demo16</h2>
        <button (click)="callService()">调用服务中封装好方法</button> 
        <button (click)="callAsynService()">异步获取数据</button>
    `
})

export class Demo16Component implements OnInit {
    constructor(private testService: TestService) { }

    ngOnInit() {

    }
    callAsynService() {
        this.testService.getData().subscribe((data) => {
            alert(data);
        }
        )
    }
    callService() {
        this.testService.showAlert('hello');

    }
}