import { Directive, Input, OnInit, ElementRef } from '@angular/core';

@Directive({ selector: '[changeBgColor]' })
export class ChangeBgColorDirective {
    constructor(private elementRef: ElementRef) { }

    @Input('changeBgColor') color = "";

    ngOnInit() {
        console.log("color is " + this.color);
        console.log(this.elementRef.nativeElement.style.backgroundColor = this.color);
    }

}