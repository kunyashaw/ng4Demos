import { Component, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked ,Input, SimpleChanges, OnInit, OnChanges, OnDestroy } from '@angular/core';

@Component({
    selector: 'demo22',
    templateUrl: './demo22.component.html'
})

export class Demo22Component implements OnInit, OnChanges, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, DoCheck {
    @Input() num = 0;
    @Input() stu: any;
    myNum = 0;
    constructor() { }

    // 在Angular第一次显示数据绑定和设置指令/组件的输入属性之后，初始化指令/组件。
    // 在第一轮ngOnChanges()完成之后调用，只调用一次。
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        console.log('on init');
        // setInterval(() => {
        //     this.myNum++;
        // }, 3000)
    }

    // 每当组件的输入属性发生变化时，
    // Angular会如何以changes对象作为参数去调用ngOnChanges()钩子
    ngOnChanges(changes: SimpleChanges) {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        console.log('on changes', changes);
    }

    ngDoCheck() {
        //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
        //Add 'implements DoCheck' to the class.
        console.log(' do check ', this.stu);

    }

    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        console.log('on destroy');

    }

    ngAfterContentInit() {
        //Called after ngOnInit when the component's or directive's content has been initialized.
        //Add 'implements AfterContentInit' to the class.
        console.log('----ngAfterContentInit 当把内容投影进组件之后调用。第一次ngDoCheck()之后调用，只调用一次。只适用于组件。');
    }

    ngAfterContentChecked() {
        //Called after every check of the component's or directive's content.
        //Add 'implements AfterContentChecked' to the class.
        console.log("----ngAfterContentChecked 每次完成被投影组件内容的变更检测之后调用。ngAfterContentInit()和每次ngDoCheck()之后调用只适合组件。");
    }

    ngAfterViewInit() {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        console.log("----ngAfterViewInit 初始化完组件视图及其子视图之后调用。第一次ngAfterContentChecked()之后调用，只调用一次。只适合组件");
    }

    ngAfterViewChecked() {
        //Called after every check of the component's view. Applies to components only.
        //Add 'implements AfterViewChecked' to the class.
        console.log("----ngAfterViewChecked 每次做完组件视图和子视图的变更检测之后调用。ngAfterViewInit()和每次ngAfterContentChecked()之后调用。只适合组件。");
    }
}