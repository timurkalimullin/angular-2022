import { Component } from '@angular/core';

interface Option {
  label: string;
  value: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  searchValue: string = '';

  filterValue: string = '';

  showSort = false;

  options: Option[] = [
    { label: 'date', value: 'date' },
    { label: 'count of views', value: 'count' },
  ];

  selectedOption?: string = 'date';

  sortOrder: 'asc' | 'desc' = 'asc';

  toggleFilter() {
    this.showSort = !this.showSort;
  }

  changeOption(opt: string) {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    this.selectedOption = opt;
  }
}
