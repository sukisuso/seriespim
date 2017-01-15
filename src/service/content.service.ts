import { Injectable }     from '@angular/core';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ContentService {

    private content: Object;
    private getContentUrl: string = '/api/content';
    private createContentUrl: string = '/api/content';
    constructor(private http: Http) {}


    get (name: String = ''): Observable<Object> {
        let headers       = new Headers({ 'Content-Type': 'application/json' });
        let options       = new RequestOptions({ headers: headers }); 
        name = name ? '?q='+name: ''; 

        return this.http.get(this.getContentUrl+name, options) 
                         .map((res:Response) => res.json()) 
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    } 

    create (body: Object): Observable<Object> {
        let headers       = new Headers({ 'Content-Type': 'application/json' });
        let options       = new RequestOptions({ headers: headers }); 

        return this.http.post(this.createContentUrl, body, options) 
                            .map((res:Response) => res.json()) 
                            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    } 
} 