import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';
import { VideoItem } from '../../models';

@Component({
  selector: 'app-detailcard',
  templateUrl: './detailcard.component.html',
  styleUrls: ['./detailcard.component.scss'],
})
export class DetailcardComponent implements OnInit, OnDestroy {
  card?: VideoItem;

  private fetchitemsSubs?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.dataService.getItem(id).subscribe(res => {
      if (!res) {
        this.router.navigate(['404']);
        return;
      }
      this.card = res;
    });
  }

  ngOnDestroy() {
    this.fetchitemsSubs?.unsubscribe();
  }
}
