import { Injectable } from '@angular/core';
import { SearchResponse } from '../../youtube/models/search-response.model';
import { SearchItem } from '../../youtube/models/search-item.model';
import { data } from '../../../assets/data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data?: SearchResponse;

  private items?: SearchResponse['items'];

  private currentItem?: SearchItem;

  getData(): SearchResponse {
    this.data = data;

    return this.data;
  }

  getItems(v?: string) {
    if (v === undefined) return undefined;

    this.items = data.items.filter(el =>
      el.snippet.title.toLowerCase().includes(v.toLowerCase())
    );

    return this.items;
  }

  getItem(id?: string | null) {
    const item = data.items.find(el => el.id === id);

    this.currentItem = item;

    return item;
  }
}
