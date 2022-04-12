import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-video-card',
  templateUrl: './top-video-card.component.html',
  styleUrls: ['./top-video-card.component.scss']
})
export class TopVideoCardComponent implements OnInit {

  @Input()
  topVideoCard: any;

  constructor() { }

  ngOnInit(): void {
  }

}
