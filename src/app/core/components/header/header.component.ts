import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Option, QueryValue } from '../../models';
import { LoginService } from '../../services/login.service';
import { QueryService } from '../../services/query.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  readonly options: Option[] = [
    { label: 'date', value: 'date' },
    { label: 'count of views', value: 'count' },
  ];

  queryValue: QueryValue = {
    filterValue: '',
  };

  showSort: boolean = false;

  searchValue?: string = '';

  userName: string | null = null;

  constructor(
    private queryService: QueryService,
    private router: Router,
    private loginService: LoginService
  ) {}

  toggleFilter() {
    this.showSort = !this.showSort;
  }

  logOut() {
    this.loginService.logOut();
  }

  ngOnInit(): void {
    this.loginService.userName$.subscribe(n => {
      const userInfo = this.loginService.getUserInfo();
      const currentUser = n ?? userInfo.userName;
      this.userName = currentUser;
      if (!currentUser) {
        this.searchValue = '';
        this.queryService.searchValueChange(this.searchValue);
      }
    });
  }

  sortChange(opt: Option['value']) {
    this.queryValue.sortOrder =
      this.queryValue.sortOrder === 'asc' ? 'desc' : 'asc';
    this.queryValue.selectedOption = opt;

    this.setQuery();
    this.queryService.queryChange(this.queryValue);
  }

  filterValueChange(e: Event) {
    this.queryValue.filterValue = (e.target as HTMLInputElement).value;
    this.setQuery();
    this.queryService.queryChange(this.queryValue);
  }

  submit(e?: SubmitEvent) {
    e?.preventDefault();
    this.router.navigate(['/']);
    this.setQuery(true);
    this.queryService.queryChange(this.queryValue);
    this.queryService.searchValueChange(this.searchValue);
  }

  setQuery(isReset?: boolean) {
    this.queryValue = !isReset
      ? {
          filterValue: this.queryValue.filterValue,
          selectedOption: this.queryValue.selectedOption,
          sortOrder: this.queryValue.sortOrder,
        }
      : {
          filterValue: '',
        };
  }
}
