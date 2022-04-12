import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AboutPageService {

  private _aboutPageUrl: string = "/assets/data/pages/about-page/about-page.json";
  private _headerUrl: string ="/assets/data/pages/about-page/head.json";

  constructor(private http: HttpClient) {}
  getpageData() {
    return this.http.get(this._aboutPageUrl);
  }
  headData() {
    return this.http.get(this._headerUrl);
  }
}
