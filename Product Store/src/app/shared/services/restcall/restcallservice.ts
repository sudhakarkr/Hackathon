import {RestCallHelper} from './restcallhelper';
import {Injectable} from '@angular/core';
import {Response} from '@angular/http';

import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class RestCallService implements RestCallHelper {

    constructor(private http: HttpClient) {
    }

    doGet(requestUrl: string): Observable<any> {
        return this.http.get(requestUrl) // ...using post request
            .map((res: Response) => res)// ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.error || 'Server error')); //...er
    }

    doPost(requestUrl: string, body: Object): Observable<any> {
        return this.http.post(requestUrl, body) // ...using post request
            .map((res: Response) => res)// ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.error || 'Server error')); //...er
    }

}
