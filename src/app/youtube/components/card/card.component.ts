import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() card?: any;

  constructor(private router: Router) {}

  go() {
    console.log('aaa');
    this.router.navigate([this.card?.id]);
  }
}
