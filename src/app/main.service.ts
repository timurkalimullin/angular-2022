import { Injectable } from '@angular/core';
import { SearchResponse } from './search/search-response.model';
import { data } from '../assets/data';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  data?: SearchResponse;

  getData(): SearchResponse {
    this.data = data;

    return this.data;
  }
}
