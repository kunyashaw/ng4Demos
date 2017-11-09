import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
    selector: 'demo11',
    template: `
        <input type='text' [(ngModel)]="myInput"/>
        <button (click)="send()">sendToDemo12</button>
        <a [routerLink]="'/demo12/'+myInput">jump</a>
        <br/>
        <a [routerLink]="['/testDemo12',{uName:myInput}]">jump</a>
        <br/>
        <button (click)="testSend()">sendToTestDemo12</button>
    `
})

export class Demo11Component implements OnInit {
    myInput = "";

    constructor(private router: Router) { }

    ngOnInit() { }

    send() {
        this.router.navigateByUrl('/demo12/' + this.myInput);
    }
    testSend() {
        this.router.navigate(['/testDemo12', { uName: this.myInput }]);
    }
}