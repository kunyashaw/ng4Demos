import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo07',
    templateUrl: './demo07.component.html'
})

export class Demo07Component implements OnInit {

    myAddr = "北京市 海淀区 万寿路1号";
    myMsg = "hello";
    myPhone = "123";

    constructor() { }

    ngOnInit() { }

    //定义一个方法，用来在用户输入的
    //手机号发生变化时，来调用该方法
    getUserInput(){
        console.log('当前输入框中的内容为:'+this.myPhone);
    }

}