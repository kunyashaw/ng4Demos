import {Component} from '@angular/core'


@Component({
    selector:'demo03',
    template:`<h1>it is my component</h1>
        <ul>
            <li *ngFor="let tmp of list;let myIndex=index">
                {{"myIndex is "+myIndex+" value is "+tmp}}
            </li>
        </ul>  

        <button *ngIf="hasMore">加载更多</button>  
        <p *ngIf="!hasMore">没有更多数据可以加载了</p>

        <div [ngSwitch]="answer">
            <p *ngSwitchCase="'a'">A</p>
            <p *ngSwitchCase="'b'">B</p>
            <p *ngSwitchCase="'c'">C</p>
            <p *ngSwitchCase="'d'">D</p>
            <p *ngSwitchDefault>请输入正确的答案</p>
        </div>
    `
})
export class Demo03Component{
    list = [100,200,300,400,500];
    hasMore = true;
    answer = 'f';
}

