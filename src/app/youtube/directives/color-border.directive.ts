import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appColorBorder]',
})
export class ColorBorderDirective implements OnInit {
  @Input() appColorBorder?: string;

  private readonly day = 24 * 3600 * 1000;

  private readonly week = 7 * this.day;

  private readonly month = 30 * this.day;

  private readonly halfYear = 6 * this.month;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const now = new Date().getTime();
    const published = new Date(this.appColorBorder ?? '').getTime();
    const difference = now - published;
    this.el.nativeElement.style.borderBottomColor = this.getColor(difference);
  }

  private getColor(diff: number) {
    switch (true) {
      case diff < this.week:
        return 'blue';
      case diff < this.month:
        return 'green';
      case diff < this.halfYear:
        return 'yellow';
      default:
        return 'red';
    }
  }
}
