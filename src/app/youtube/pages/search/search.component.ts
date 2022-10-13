import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { QueryService } from 'src/app/core/services/query.service';
import { DataService } from 'src/app/core/services/data.service';
import { QueryValue } from 'src/app/core/models';
import { SearchItem } from '../../models';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnDestroy {
  items?: SearchItem[] = [];

  queryValue?: QueryValue;

  querySubscription?: Subscription;

  searchSubscription?: Subscription;

  constructor(
    private queryService: QueryService,
    private dataService: DataService
  ) {
    this.querySubscription = this.queryService.query$.subscribe(val => {
      this.queryValue = val;
    });
    this.searchSubscription = this.queryService.search$.subscribe(val => {
      this.items = this.dataService.getItems(val);
    });
  }

  ngOnDestroy(): void {
    this.querySubscription?.unsubscribe();
    this.searchSubscription?.unsubscribe();
  }
}
