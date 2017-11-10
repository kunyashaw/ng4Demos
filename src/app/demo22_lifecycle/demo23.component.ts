import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo23',
    template: `
    <demo22 *ngIf="count<5" [num]="count" [stu]="stu"></demo22>
    <button (click)="handleClick()">修改count</button>
    `
})

export class Demo23Component implements OnInit {
    count = 0;
    stu = { stuCount: 0 }
    constructor() { }

    ngOnInit() { }

    handleClick() {
        this.stu.stuCount++;
        this.count++;
    }
}