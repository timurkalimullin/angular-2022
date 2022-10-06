import { Component, Input } from '@angular/core';
import { SearchResponse } from '../common/models';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input() items?: SearchResponse['items'] = [];
}
