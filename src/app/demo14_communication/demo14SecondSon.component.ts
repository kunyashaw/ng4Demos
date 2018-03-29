import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo14SecondSon',
    template: `
        <h2>这是Demo14SecondSon Component</h2>
    `
})

export class Demo14SecondSonComponent implements OnInit {
    score = 80;
    constructor() { }

    ngOnInit() { 
        console.log('---',this);
    }
}