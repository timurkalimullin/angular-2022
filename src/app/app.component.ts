import { Component } from '@angular/core';
import { MainService } from './common/services/main.service';
import { SearchResponse } from './common/models/search-response.model';
import { QueryValue } from './common/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items?: SearchResponse['items'];

  query: QueryValue = {
    filterValue: '',
  };

  constructor(private mainService: MainService) {}

  search(v: string) {
    const items = this.mainService.getItems(v);

    this.items = items;
  }

  queryChange(query: QueryValue) {
    this.query = { ...this.query, ...query };
  }
}
