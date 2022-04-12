import { Component, OnInit } from '@angular/core';
import headlineJson from 'src/assets/data/headlinescard.json';

interface headlinecard {
  url: string;
}

@Component({
  selector: 'app-headline-card',
  templateUrl: './headline-card.component.html',
  styleUrls: ['./headline-card.component.scss']
})
export class HeadlineCardComponent implements OnInit {

  headlines: headlinecard[] = headlineJson;

  constructor() { }

  ngOnInit(): void {
  }

}
