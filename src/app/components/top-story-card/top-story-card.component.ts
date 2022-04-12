import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-story-card',
  templateUrl: './top-story-card.component.html',
  styleUrls: ['./top-story-card.component.scss']
})
export class TopStoryCardComponent implements OnInit {

  @Input() 
  topStoryCard: any;

  constructor() { }

  ngOnInit(): void {
  }

}
