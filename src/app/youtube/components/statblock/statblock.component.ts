import { Component, Input, OnInit } from '@angular/core';
import { VideoItem } from '../../models';

@Component({
  selector: 'app-statblock',
  templateUrl: './statblock.component.html',
  styleUrls: ['./statblock.component.scss'],
})
export class StatblockComponent implements OnInit {
  @Input() stats?: VideoItem['statistics'];

  innerStats?: Omit<any, 'favoriteCount'>;

  ngOnInit() {
    if (!this.stats) return;

    const { favoriteCount, ...rest } = this.stats;

    this.innerStats = rest;
  }
}
