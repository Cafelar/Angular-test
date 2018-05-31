import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs-compat/Observable';
import 'rxjs-compat/add/operator/toPromise';
import 'rxjs-compat/add/operator/delay';
import 'rxjs-compat/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class ProcessHTTPMsgService {

  constructor() { }

  public extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body || { };
  }
}
