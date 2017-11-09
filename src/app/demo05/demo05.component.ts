import {Component} from '@angular/core';

@Component({
    selector:'demo05',
    templateUrl:'./demo05.component.html',
    // 让组件能够使用当前目录下的test.css中的样式类
    styleUrls:['./test.css']
})

export class Demo05Component{
    imgUrl="1.jpg";
    linkUrl="http://tedu.cn";
    myColor = 'red';
    //定义一个叫做handleClick的方法
    handleClick(){
        alert('btn is clicked');
    }
}