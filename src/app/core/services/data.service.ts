/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { map, mergeMap, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MAX_RESULTS } from 'src/app/shared/constants';
import { VideoResponse, SearchResponse } from 'src/app/youtube/models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private client: HttpClient) {}

  getItems(v?: string) {
    if (!v) return new Observable();

    return this.client
      .get<SearchResponse>(
        `search?key=<API_KEY>&type=video&part=snippet&maxResults=${MAX_RESULTS}&q=${v}`
      )
      .pipe(
        mergeMap(res => {
          const ids = res?.items?.reduce((acc, el) => {
            return [...acc, el.id.videoId];
          }, [] as string[]);
          const idsString = ids?.join(',');

          return this.client
            .get<VideoResponse>(
              `videos?key=<API_KEY>&id=${idsString}&part=snippet,statistics`
            )
            .pipe(map(r => r.items));
        })
      );
  }

  getItem(id?: string | null) {
    return this.client
      .get<VideoResponse>(
        `videos?key=<API_KEY>&id=${id}&part=snippet,statistics`
      )
      .pipe(
        map(el => {
          return el?.items?.[0];
        })
      );
  }
}
