import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'demo12',
    template: `
        <h2>{{"接受到的参数为"+msg}}</h2>
    `
})

export class Demo12Component implements OnInit {
    msg = "";
    constructor(private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe((data: any) => {
            console.log(data);
            this.msg = data.uName;
        })
    }
}