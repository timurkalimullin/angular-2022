import { Component } from '@angular/core';
import { MainService } from './main.service';
import { SearchResponse } from './search/search-response.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items?: SearchResponse['items'];

  constructor(private mainService: MainService) {}

  onSearch(v: string) {
    const items = this.mainService.getItems(v);

    this.items = items;
  }
}
