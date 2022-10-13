/* eslint-disable class-methods-use-this */
import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../../../youtube/models';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value?: SearchItem[], fragment?: string) {
    return value?.filter(el =>
      el.snippet.title.toLowerCase().includes(fragment?.toLowerCase() ?? '')
    );
  }
}
