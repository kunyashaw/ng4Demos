import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo15Custom',
    template: `
        <h1>Demo15CUstom</h1>
        <p>{{1 | sex:false}}</p>
    `
})

export class Demo15CustomComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}