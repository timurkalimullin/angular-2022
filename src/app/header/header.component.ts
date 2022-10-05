import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  searchValue: string = '';

  filterValue: string = '';

  showFilter = true;

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }
}
