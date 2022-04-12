import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-article-card',
  templateUrl: './video-article-card.component.html',
  styleUrls: ['./video-article-card.component.scss']
})
export class VideoArticleCardComponent implements OnInit {

  @Input()
  videoCard: any;

  constructor() { }

  ngOnInit(): void {
  }

}
