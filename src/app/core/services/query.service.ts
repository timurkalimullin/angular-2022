import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { QueryValue } from '../models';

@Injectable({
  providedIn: 'root',
})
export class QueryService {
  private querySource = new Subject<QueryValue>();

  private searchSource = new Subject<string>();

  query$ = this.querySource.asObservable();

  search$ = this.searchSource.asObservable();

  searchChange(val: string) {
    console.log({ val });
    this.searchSource.next(val);
  }
}
