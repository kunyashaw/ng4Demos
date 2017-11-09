import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../translate/translate.service';

@Component({
    selector: 'demo19',
    template: `
    <h2>{{ title | translate }}</h2>
    <h3>{{titleAfterTranslate}}</h3>  
    `
})

export class Demo19Component implements OnInit {
    title = 'hello world'
    titleAfterTranslate = "";
    nowLang = 'zh';
    constructor(private ts: TranslateService) {
        this.ts.use('zh');
        this.titleAfterTranslate = this.ts.instant(this.title);
    }

    ngOnInit() {
        this.ts.use(this.nowLang);

    }
}