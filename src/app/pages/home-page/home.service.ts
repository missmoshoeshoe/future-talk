import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private _trendingListUrl: string = "/assets/data/pages/home-page/trending-list.json";
  private _videoCardsUrl: string = "/assets/data/pages/home-page/video-cards.json";
  private _articleCardsUrl: string = "/assets/data/pages/home-page/article-cards.json";
  private _topStoryCardUrl: string = "/assets/data/pages/home-page/top-story.json";
  private _topVideoUrl: string = "/assets/data/pages/home-page/top-video.json";

  constructor(private http: HttpClient) {}
  getTrendingListData() {
    return this.http.get(this._trendingListUrl);
  }

  getVideoData() {
    return this.http.get(this._videoCardsUrl)
  }

  getArticleCardData() {
    return this.http.get(this._articleCardsUrl)
  }

  getTopStoryCard() {
    return this.http.get(this._topStoryCardUrl)
  }
  
  getTopVideoData() {
    return this.http.get(this._topVideoUrl)
  }

}
