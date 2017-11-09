import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo15',
    templateUrl: './demo15.component.html'
})

export class Demo15Component implements OnInit {
    constructor() { }
    nowDate = new Date();
    stu = { name: 'zhangsan', age: 20 };
    name = "Michael";
    price = 3.1415926;
    tips = "pipe is a method in fact";
    value = 1.51239898;
    ngOnInit() { }
}