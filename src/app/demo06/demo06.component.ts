import {Component} from '@angular/core';

@Component({
  selector:'demo06',
  templateUrl:'./demo06.component.html'  
})

export class Demo06Component{

    opacityValue = 0;
    isIntervalWork = false;

    //启动一个定时器，来完成变量的修改操作
    modifyOpacityValue(){
        //判断，当isIntervalWork为true，就不再反复启动定时器
        if(this.isIntervalWork)
        {
            return;
        }

        //只要启动了定时器，将该自定义的数据设置为true
        this.isIntervalWork = true;
        
        setInterval(
             ()=>{
                this.opacityValue+=0.1;
                if(this.opacityValue > 1)
                {
                    this.opacityValue = 0;
                }
            },
            300
        )
    }

}