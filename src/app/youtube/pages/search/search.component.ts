import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { QueryService } from 'src/app/core/services/query.service';
import { DataService } from 'src/app/core/services/data.service';
import { SearchItem } from '../../models';
import { FilterPipe } from '../../pipes/filter/filter.pipe';
import { SortPipe } from '../../pipes/sort/sort.pipe';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnDestroy {
  items?: SearchItem[] = [];

  querySubscription?: Subscription;

  constructor(
    private queryService: QueryService,
    private dataService: DataService,
    private filterPipe: FilterPipe,
    private sortpipe: SortPipe
  ) {
    this.querySubscription = this.queryService.query$.subscribe(val => {
      const items = this.dataService.getItems(val.searchValue);
      if (items) {
        const filtered = this.filterPipe.transform(
          items,
          val.query?.filterValue
        );
        const sorted = this.sortpipe.transform(
          filtered,
          val.query?.selectedOption,
          val.query?.sortOrder
        );
        this.items = sorted;
      }
    });
  }

  ngOnDestroy(): void {
    this.querySubscription?.unsubscribe();
  }
}
