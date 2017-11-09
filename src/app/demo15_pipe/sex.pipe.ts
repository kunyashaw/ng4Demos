import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sex'
})

export class SexPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        console.log(args);
        if (value == 1) {
            if (args[0]) {
                return '男'
            }
            else {
                return 'boy'
            }
        }
        else {
            if (args[0]) {
                return '女'
            }
            else {
                return 'girl'
            }

        }
    }
}