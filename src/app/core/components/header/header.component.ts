import { Component } from '@angular/core';
import { Option, QueryValue } from '../../models';
import { QueryService } from '../../services/query.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  readonly options: Option[] = [
    { label: 'date', value: 'date' },
    { label: 'count of views', value: 'count' },
  ];

  queryValue: QueryValue = {
    filterValue: '',
  };

  showSort: boolean = false;

  searchValue?: string = '';

  constructor(private queryService: QueryService) {}

  toggleFilter() {
    this.showSort = !this.showSort;
  }

  sortChange(opt: Option['value']) {
    this.queryValue.sortOrder =
      this.queryValue.sortOrder === 'asc' ? 'desc' : 'asc';
    this.queryValue.selectedOption = opt;

    this.setQuery();
    this.queryService.queryChange(this.queryValue);
  }

  filterValueChange(e: Event) {
    this.queryValue.filterValue = (e.target as HTMLInputElement).value;
    this.setQuery();
    this.queryService.queryChange(this.queryValue);
  }

  submit(e?: SubmitEvent) {
    e?.preventDefault();
    this.setQuery(true);
    this.queryService.queryChange(this.queryValue);
    this.queryService.searchValueChange(this.searchValue);
  }

  setQuery(isReset?: boolean) {
    this.queryValue = !isReset
      ? {
          filterValue: this.queryValue.filterValue,
          selectedOption: this.queryValue.selectedOption,
          sortOrder: this.queryValue.sortOrder,
        }
      : {
          filterValue: '',
        };
  }
}
