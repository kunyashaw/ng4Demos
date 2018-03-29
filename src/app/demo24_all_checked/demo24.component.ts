import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo24',
    templateUrl: './demo24.component.html'
})

export class Demo24Component implements OnInit {
    //全选
    isAllChecked:boolean = false;
    //单选
    list=[
        {
            title:'商品1',
            isChecked:false
        },
        {
            title:'商品2',
            isChecked:false
        },
        {
            title:'商品3',
            isChecked:false
        },
    ];
    constructor() { }

    ngOnInit() { }

    changeAll(arg:any){
        console.log('change all',this.list);
        this.isAllChecked = arg;
        for(var i=0;i<this.list.length;i++){
            this.list[i].isChecked = this.isAllChecked;
        }
    }


    changeOne(arg:any){
        console.log('change all',this.list);
        var result = true;
        for(var i=0;i<this.list.length;i++){
            console.log( this.list[i].isChecked);
            result = (result && this.list[i].isChecked);
        }
        
        this.isAllChecked = result;
    }
}