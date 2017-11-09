import {Component} from '@angular/core'

@Component({
    selector:'demo04',
    template:`<h1>Hello Demo04</h1>
        <ul [ngSwitch]="uName">    
            <li *ngSwitchCase="'lucy'">hello lucy</li>
            <li *ngSwitchCase="'mike'">你好 mike</li>
            <li *ngSwitchDefault>hello</li>
        </ul>
        <table>
            <thead>
                <tr>
                    <th>姓名</th>
                    <th>成绩</th>
                    <th>住址</th>
                </tr>
            </thead>
            <tbody>
                <ng-container *ngFor="let stu of stuList">
                    <tr *ngIf="stu.stuScore>80" >
                        <td>{{stu.stuName}}</td>
                        <td>{{stu.stuScore}}</td>
                        <td>{{stu.stuAddr}}</td>
                    </tr>
                </ng-container>
            </tbody>
        </table>
    `
})

export class Demo04Component{
    uName="miller";
    stuList = [
        {stuName:'lucy',stuScore:88,stuAddr:'bj'},
        {stuName:'michael',stuScore:90,stuAddr:'bj'},
        {stuName:'wentworth',stuScore:98,stuAddr:'bj'},
        {stuName:'miller',stuScore:60,stuAddr:'bj'},
        {stuName:'lily',stuScore:65,stuAddr:'bj'},
    ];
}