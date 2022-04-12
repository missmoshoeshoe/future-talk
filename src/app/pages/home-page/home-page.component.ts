import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  trendingData: any;
  advertData: any;
  videoData: any;
  articleCardData: any;
  topStoryData: any;
  topVideoData: any;

  constructor(private myService:  HomeService) { }

  ngOnInit(): void {
    this.myService.getTrendingListData()
    .subscribe(res => this.trendingData = res);
    this.myService.getVideoData()
    .subscribe(res => this.videoData = res);
    this.myService.getArticleCardData()
    .subscribe(res => this.articleCardData = res);
    this.myService.getTopStoryCard()
    .subscribe(res => this.topStoryData = res);
    this.myService.getTopVideoData()
    .subscribe(res => this.topVideoData = res);
  }

}
