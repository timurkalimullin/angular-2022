import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Option, QueryValue } from '../../models';
import { QueryService } from '../../services/query.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() query = new EventEmitter<QueryValue>();

  @Input() queryValue!: QueryValue;

  showSort: boolean = false;

  readonly options: Option[] = [
    { label: 'date', value: 'date' },
    { label: 'count of views', value: 'count' },
  ];

  searchValue: string = '';

  constructor(private queryService: QueryService) {}

  toggleFilter() {
    this.showSort = !this.showSort;
  }

  sortChange(opt: Option['value']) {
    const sortOrder = this.queryValue.sortOrder === 'asc' ? 'desc' : 'asc';
    const selectedOption = opt;

    this.query.emit({ selectedOption, sortOrder });
  }

  filterValueChange(e: Event) {
    const filterValue = (e.target as HTMLInputElement).value;
    this.query.emit({ filterValue });
  }

  submit() {
    this.resetQueryValue();
    this.queryService.searchChange(this.searchValue);
  }

  resetQueryValue() {
    this.query.emit({
      filterValue: '',
      sortOrder: undefined,
      selectedOption: undefined,
    });
  }
}
