import { Component } from '@angular/core';
import { QueryValue } from '../core/models';
import { DataService } from '../core/services/data.service';
import { SearchResponse } from '../youtube/models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  items?: SearchResponse['items'];

  query: QueryValue = {
    filterValue: '',
  };

  constructor(private dataService: DataService) {}

  search(v: string) {
    const items = this.dataService.getItems(v);

    this.items = items;
  }

  queryChange(query: QueryValue) {
    this.query = { ...this.query, ...query };
  }
}
