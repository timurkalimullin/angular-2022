import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { QueryValue } from '../models';

@Injectable({
  providedIn: 'root',
})
export class QueryService {
  private querySource = new BehaviorSubject<QueryValue>({});

  private searchSource = new BehaviorSubject<string | undefined>(undefined);

  query$ = this.querySource.asObservable();

  search$ = this.searchSource.asObservable();

  queryChange(val: QueryValue) {
    this.querySource.next(val);
  }

  searchValueChange(val?: string) {
    this.searchSource.next(val ?? '');
  }
}
