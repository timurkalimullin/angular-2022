import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { QueryValue } from '../models';

interface QuerySource {
  searchValue?: string;
  query: QueryValue;
}

@Injectable({
  providedIn: 'root',
})
export class QueryService {
  private querySource = new Subject<QuerySource>();

  query$ = this.querySource.asObservable();

  queryChange(val: QuerySource) {
    this.querySource.next(val);
  }
}
