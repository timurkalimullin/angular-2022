import { Component, Input, OnInit } from '@angular/core';
import { Statistics } from '../../models';

@Component({
  selector: 'app-statblock',
  templateUrl: './statblock.component.html',
  styleUrls: ['./statblock.component.scss'],
})
export class StatblockComponent implements OnInit {
  @Input() stats?: Statistics;

  innerStats?: Omit<Statistics, 'favoriteCount'>;

  ngOnInit() {
    if (!this.stats) return;

    const { favoriteCount, ...rest } = this.stats;

    this.innerStats = rest;
  }
}
