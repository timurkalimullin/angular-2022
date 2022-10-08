import { Component, Output, EventEmitter } from '@angular/core';
import { Option, QueryValue } from '../common/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() query = new EventEmitter<QueryValue>();

  @Output() search = new EventEmitter<string>();

  showSort: boolean = false;

  readonly options: Option[] = [
    { label: 'date', value: 'date' },
    { label: 'count of views', value: 'count' },
  ];

  searchValue: string = '';

  queryValue: QueryValue = {
    filterValue: '',
  };

  toggleFilter() {
    this.showSort = !this.showSort;
  }

  sortChange(opt: Option['value']) {
    this.queryValue.sortOrder =
      this.queryValue.sortOrder === 'asc' ? 'desc' : 'asc';
    this.queryValue.selectedOption = opt;

    this.query.emit(this.queryValue);
  }

  filterValueChange(e: Event) {
    this.queryValue.filterValue = (e.target as HTMLInputElement).value;
    this.query.emit(this.queryValue);
  }

  submit() {
    this.resetQueryValue();
    this.search.emit(this.searchValue);
  }

  resetQueryValue() {
    const resetedValue = { filterValue: '' };
    this.queryValue = resetedValue;
    this.query.emit(resetedValue);
  }
}
