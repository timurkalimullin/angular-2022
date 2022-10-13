import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { QueryService } from 'src/app/core/services/query.service';
import { DataService } from 'src/app/core/services/data.service';
import { QueryValue } from 'src/app/core/models';
import { SearchItem } from '../../models';

@Component({
  selector: 'app-mainpage',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnDestroy, OnInit {
  items?: SearchItem[] = [];

  queryValue?: QueryValue;

  private querySubscription?: Subscription;

  private searchSubscription?: Subscription;

  constructor(
    private queryService: QueryService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.querySubscription = this.queryService.query$.subscribe(val => {
      this.queryValue = val;
    });
    this.searchSubscription = this.queryService.search$.subscribe(val => {
      this.items = this.dataService.getItems(val);
    });
  }

  ngOnDestroy(): void {
    this.querySubscription?.unsubscribe();
    this.searchSubscription?.unsubscribe();
  }
}
