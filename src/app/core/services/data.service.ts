/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { of, map, mergeMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BASE_URL, MAX_RESULTS } from 'src/app/shared/constants';
import { env } from 'src/env';
import { SearchResponse } from '../../youtube/models/search-response.model';
import { data } from '../../../assets/data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data?: any;

  private items?: any;

  private currentItem?: any;

  constructor(private client: HttpClient) {}

  getData(): SearchResponse {
    this.data = data;

    return this.data;
  }

  getItems(v?: string) {
    if (v === undefined) return undefined;

    this.items = data.items.filter(el =>
      el.snippet.title.toLowerCase().includes(v.toLowerCase())
    );

    return this.client
      .get<SearchResponse>(
        `${BASE_URL}/search?key=${env.API_KEY}&type=video&part=snippet&maxResults=${MAX_RESULTS}&q=${v}`
      )
      .pipe(
        mergeMap(res => {
          const ids = res.items.reduce((acc, el) => {
            return [...acc, el.id.videoId];
          }, [] as string[]);
          const idsString = ids.join(',');
          return this.client
            .get<any>(
              `${BASE_URL}/videos?key=${env.API_KEY}&id=${idsString}&part=snippet,statistics`
            )
            .pipe(map(r => r.items));
        })
      );

    // return of(this.items);
  }

  getItem(id?: string | null) {
    const item = data.items.find(el => el.id === id);

    this.currentItem = item;

    return of(item);
  }
}
