import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statblock',
  templateUrl: './statblock.component.html',
  styleUrls: ['./statblock.component.scss'],
})
export class StatblockComponent {
  @Input() name?: string;

  @Input() value?: string;

  permitted = ['viewCount', 'likeCount', 'dislikeCount', 'commentCount'];
}
