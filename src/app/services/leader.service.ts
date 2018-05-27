import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

import {Observable} from 'rxjs-compat/Observable';
import 'rxjs-compat/add/operator/toPromise';
import 'rxjs-compat/add/operator/delay';
import 'rxjs-compat/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeader(): Observable<Leader[]> {
    return Observable.of(LEADERS).delay(2000);
  }

  getLeaders(id: number): Observable<Leader> {
    return Observable.of(LEADERS.filter((leader) => (leader.id === id))[0]).delay(2000);
  }

  getFeaturedLeader(): Observable<Leader> {
    return Observable.of(LEADERS.filter((leader) => leader.featured)[0]).delay(2000);
  }
}
