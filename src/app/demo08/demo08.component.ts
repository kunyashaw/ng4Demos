import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo08',
    templateUrl: './demo08.component.html'
})

export class Demo08Component implements OnInit {
    isEnable:boolean = false;
    myInput:string="";
    historyList:string[]=[];

    constructor() { }

    ngOnInit() { 
        
    }

    //用来保存用户输入的信息
    saveInputHistory(data:string){
        console.log('用户输入的内容发生了变化'+this.myInput);
        console.log(data);
        this.historyList.push(this.myInput);
    }
}