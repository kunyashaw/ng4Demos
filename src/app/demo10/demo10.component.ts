import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
    selector: 'demo10',
    templateUrl: './demo10.component.html'
})

export class Demo10Component implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() { }

    jump() {
        this.router.navigateByUrl('demo09');
    }
}