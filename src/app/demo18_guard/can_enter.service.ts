// a-guard-can-activate

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class Demo18Guard implements CanActivate {
    constructor() { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        var num = Math.random();
        console.log(num);
        if (num > 0.5) {
            return true;
        }
        else {
            return false;
        }
    }


    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    //     var num = Math.random();
    //     console.log(num);


    //     return new Observable(() => {
    //         let myObservable = new Subject();
    //         if (num > 0.5) {
    //             myObservable.next(true);
    //         }
    //         else {
    //             myObservable.next(false);
    //         }
    //         myObservable.complete();
    //     });


    // }
}