import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { TXService } from './tx.service'
@Component({
    selector: 'demo14Son',
    template: `
        <h1>这是子组件 {{"名字是"+childName}}</h1>
        <h2>{{'年龄是'+myAge}}</h2>
        
        <button (click)="send()">和父组件打个招呼</button>
    `
})

export class Demo14SonComponent implements OnInit {
    @Input() childName: string;
    //给childAge指定一个别名myAge，官方不推荐这么做。
    @Input('childAge') myAge: string;
    //子组件暴露一个EventEmitter属性，当事件发生时，子组件利用该属性emits(向上弹射)事件。
    //父组件绑定到这个事件属性，并在事件发生时作出回应。
    //子组件的EventEmitter属性是一个输出属性，通常带有@Output装饰器，
    @Output() sonEvent = new EventEmitter();
    constructor(private tx: TXService) { }

    ngOnInit() {
        console.log("子组件能拿到父组件共用的服务数据吗？？", this.tx.list);
    }

    send() {
        this.sonEvent.emit('天冷了，记得多穿衣服');
    }
}