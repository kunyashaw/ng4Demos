import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
    selector: 'notFound',
    template: `
        <h1>404</h1>  
        <button (click)="back()">Back</button>  
    `
})

export class NotFoundComponent implements OnInit {
    constructor(private location: Location) { }

    ngOnInit() { }

    back() {
        this.location.back();
    }
}