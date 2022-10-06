import { Component, Output, EventEmitter } from '@angular/core';

interface Option {
  label: string;
  value: 'date' | 'count';
}

interface QueryValue {
  filterValue: string;
  selectedOption: Option['value'];
  sortOrder: 'asc' | 'desc';
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() query = new EventEmitter<QueryValue>();

  @Output() search = new EventEmitter<string>();

  showSort: boolean = false;

  options: Option[] = [
    { label: 'date', value: 'date' },
    { label: 'count of views', value: 'count' },
  ];

  searchValue: string = '';

  filterValue: string = '';

  selectedOption: Option['value'] = 'date';

  sortOrder: QueryValue['sortOrder'] = 'asc';

  toggleFilter() {
    this.showSort = !this.showSort;
  }

  getQuery() {
    return {
      selectedOption: this.selectedOption,
      sortOrder: this.sortOrder,
      filterValue: this.filterValue,
    };
  }

  changeOption(opt: Option['value']) {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    this.selectedOption = opt;

    this.query.emit(this.getQuery());
  }

  filterValueChange(e: any) {
    this.filterValue = e.target.value;

    this.query.emit(this.getQuery());
  }

  submit() {
    this.search.emit(this.searchValue);
  }
}
