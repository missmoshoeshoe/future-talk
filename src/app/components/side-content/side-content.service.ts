import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SideContentService {

  private _advertUrl: string = "/assets/data/side-content/advert-card-01.json";

  constructor(private http: HttpClient) {}
  getAdvertData() {
    return this.http.get(this._advertUrl);
  }

}
