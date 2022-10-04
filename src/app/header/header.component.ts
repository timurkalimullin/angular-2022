import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  value: string = '';

  @Output() search = new EventEmitter<string>();

  onChange(val: string) {
    this.search.emit(val);
  }
}
