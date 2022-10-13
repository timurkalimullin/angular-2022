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

    this.setCurrentQuery();
  }

  filterValueChange(e: Event) {
    this.queryValue.filterValue = (e.target as HTMLInputElement).value;
    this.setCurrentQuery();
  }

  submit() {
    this.resetQuery();
    this.setCurrentQuery();
  }

  setCurrentQuery() {
    this.queryService.queryChange({
      searchValue: this.searchValue,
      query: this.queryValue,
    });
  }

  resetQuery() {
    this.queryValue = {
      filterValue: '',
    };
  }
}
