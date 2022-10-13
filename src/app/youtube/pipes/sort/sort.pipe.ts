/* eslint-disable class-methods-use-this */
import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../../models';
import { QueryValue } from '../../../core/models';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(
    value?: SearchItem[],
    sortParam?: QueryValue['selectedOption'],
    sortOrder?: QueryValue['sortOrder']
  ) {
    if (!sortParam || !sortOrder) return value;

    const compareDates = (a: string, b: string) =>
      new Date(a).getTime() - new Date(b).getTime();
    const compareMap = {
      date: (a: string, b: string) =>
        sortOrder === 'asc' ? compareDates(a, b) : -compareDates(a, b),
      count: (a: string, b: string) =>
        sortOrder === 'asc' ? Number(a) - Number(b) : Number(b) - Number(a),
    };

    return value?.sort((a, b) =>
      sortParam === 'count'
        ? compareMap.count(a.statistics.viewCount, b.statistics.viewCount)
        : compareMap.date(a.snippet.publishedAt, b.snippet.publishedAt)
    );
  }
}
