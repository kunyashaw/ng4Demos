import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TestService {

    constructor() { }

    showAlert(msg: string) {
        alert(msg);
    }

    getData() {
        let observer = {
            next: function (value: any) {
                console.log(value);
            },
            error: function (error: any) {
                console.log(error);
            },
            complete: function () {
                console.log('Completed');
            }
        };
        console.log(observer);
        return new Observable(() => {
            let subject = new Subject();
            console.log(observer);
            setTimeout(() => {
                console.log(observer);
                observer.next("hello i'm data");
            }, 2000);
        })
    }





}