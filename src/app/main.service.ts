import { Injectable } from '@angular/core';
import { SearchResponse } from './search/search-response.model';
import { data } from '../assets/data';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  data?: SearchResponse;

  items?: SearchResponse['items'];

  getData(): SearchResponse {
    this.data = data;

    return this.data;
  }

  getItems(v: string) {
    this.items = data.items.filter(el =>
      el.snippet.title.toLowerCase().includes(v.toLowerCase())
    );

    return this.items;
  }
}
