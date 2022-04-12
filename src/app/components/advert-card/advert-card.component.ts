import { Component, OnInit, Input  } from '@angular/core';


@Component({
  selector: 'app-advert-card',
  templateUrl: './advert-card.component.html',
  styleUrls: ['./advert-card.component.scss']
})
export class AdvertCardComponent implements OnInit {

  @Input()
  advertCard: any;

  constructor() { }

  ngOnInit(): void {
  }

}
