import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { RestangularModule, Restangular } from 'ngx-restangular';

import {Observable} from 'rxjs-compat/Observable';
import 'rxjs-compat/add/operator/toPromise';
import 'rxjs-compat/add/operator/delay';
import 'rxjs-compat/add/operator/catch';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/observable/of';

import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private restangular: Restangular,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getDishes(): Observable<Dish[]> {
    return this.restangular.all('dishes').getList();
  }

  getDish(id: number): Observable<Dish> {
    return  this.restangular.one('dishes',id).get();
  }

  getFeaturedDish(): Observable<Dish> {
    return this.restangular.all('dishes').getList({featured: true})
    .map(dishes => dishes[0]);
  }

  getDishIds(): Observable<number[]> {
    return this.getDishes()
      .map(dishes => { return dishes.map(dish => dish.id) })
      .catch(error => { return Observable.throw(error); } );
  }
}
