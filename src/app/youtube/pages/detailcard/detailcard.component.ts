import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';
import { SearchItem } from '../../models';

@Component({
  selector: 'app-detailcard',
  templateUrl: './detailcard.component.html',
  styleUrls: ['./detailcard.component.scss'],
})
export class DetailcardComponent implements OnInit {
  card?: SearchItem;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const currentCard = this.dataService.getItem(id);
    this.card = currentCard;
  }
}
