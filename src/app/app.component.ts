import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { SearchResponse } from './search/search-response.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  data?: SearchResponse;

  constructor(private mainService: MainService) {}

  ngOnInit() {
    this.data = this.mainService.getData();
  }
}
