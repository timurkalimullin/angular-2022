import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { QueryService } from 'src/app/core/services/query.service';
import { DataService } from 'src/app/core/services/data.service';
import { SearchItem } from '../../models';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnDestroy {
  items?: SearchItem[] = [];

  subscription?: Subscription;

  constructor(
    private queryService: QueryService,
    private dataService: DataService
  ) {
    this.subscription = this.queryService.search$.subscribe(val => {
      const items = this.dataService.getItems(val);
      this.items = items;
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
