/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { map, mergeMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BASE_URL, MAX_RESULTS } from 'src/app/shared/constants';
import { env } from 'src/env';
import { SearchResponse } from '../../youtube/models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private client: HttpClient) {}

  getItems(v?: string) {
    return this.client
      .get<SearchResponse>(
        `${BASE_URL}/search?key=${env.API_KEY}&type=video&part=snippet&maxResults=${MAX_RESULTS}&q=${v}`
      )
      .pipe(
        tap(res => console.log({ res })),
        mergeMap(res => {
          const ids = res?.items?.reduce((acc, el) => {
            return [...acc, el.id.videoId];
          }, [] as string[]);
          const idsString = ids?.join(',');

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
    return this.client
      .get<any>(
        `${BASE_URL}/videos?key=${env.API_KEY}&id=${id}&part=snippet,statistics`
      )
      .pipe(
        map(el => {
          return el?.items?.[0];
        })
      );
  }
}
