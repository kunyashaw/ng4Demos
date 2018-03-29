import { Injectable } from '@angular/core';
import { Http, Response,RequestOptions ,Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MyHttpService {
    constructor(private http: Http) { }

    sendRequest(url: string) {
        return this.http.get(url)
            .map((response: Response) => response.json());
    }

    sendPostRequest(){
       var headers = new Headers();
       headers.append('Content-Type', 'application/x-www-form-urlencoded');
       
       var userData = {
           userId: 1,
           id: 1,
           title: "yangdayan",
           body: "nishigedabendan"
        }

       this.http.post('https://jsonplaceholder.typicode.com/posts', userData, 
       {headers: headers}).map(res => res.json()).subscribe(
             data => console.log(data),
       );



    }

}