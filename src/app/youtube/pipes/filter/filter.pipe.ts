/* eslint-disable class-methods-use-this */
import { Pipe, PipeTransform } from '@angular/core';
import { VideoItem } from '../../models';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value?: VideoItem[], fragment?: string) {
    return value?.filter(el =>
      el.snippet.title.toLowerCase().includes(fragment?.toLowerCase() ?? '')
    );
  }
}
