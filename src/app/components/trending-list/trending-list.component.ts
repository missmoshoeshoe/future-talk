import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trending-list',
  templateUrl: './trending-list.component.html',
  styleUrls: ['./trending-list.component.scss']
})
export class TrendingListComponent implements OnInit {

  @Input()
  trendingList: any;

  constructor() { }

  ngOnInit(): void {
  }

}
