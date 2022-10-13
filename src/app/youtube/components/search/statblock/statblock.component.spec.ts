import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatblockComponent } from './statblock.component';

describe('StatblockComponent', () => {
  let component: StatblockComponent;
  let fixture: ComponentFixture<StatblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatblockComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StatblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
