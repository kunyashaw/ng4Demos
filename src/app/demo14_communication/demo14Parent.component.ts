import { ViewChild, Component, OnInit } from '@angular/core';
import { TXService } from './tx.service'

@Component({
    selector: 'demo14Parent',
    providers: [TXService],
    template: `
        <h1>这是父组件</h1>
        <input type='text' [(ngModel)]="sonName"/>
        <button (click)="getMsg(mySon)">获取二儿子的信息</button>
        <hr/>
        <demo14Son (sonEvent)="rcvMsg($event)" childAge="20" [childName]="sonName"></demo14Son>
        <demo14SecondSon #mySon></demo14SecondSon>
    `
})
//把本地变量(#mySon)放到(<demo14SecondSon>)标签中，用来代表子组件。
//这样父组件的模板就得到了子组件的引用，于是可以在父组件的模板中访问子组件的所有属性和方法。
export class Demo14ParentComponent implements OnInit {
    @ViewChild('mySon') mySon: any;
    sonName = "zhangsan";

    constructor(private tx: TXService) { }

    ngOnInit() {
        this.tx.list.push(123);
    }

    getMsg(component: any) {
        console.log("mySon", this.mySon);
        console.log(component);
        console.log(component.score);
    }

    rcvMsg(data: string) {
        console.log(data);
    }
}