import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { VideoItem } from '../../models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() card?: VideoItem;

  constructor(private router: Router) {}

  go() {
    this.router.navigate([this.card?.id]);
  }
}
