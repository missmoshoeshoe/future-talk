import { Component, OnInit, Input } from '@angular/core';
import { AboutPageService } from './about-page.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  @Input()
  aboutPage: any;
  pageData: any;

  constructor(private myService: AboutPageService) { }

  ngOnInit(): void {
    this.myService.headData()
      .subscribe(res => this.pageData = res);
    this.myService.getpageData()
      .subscribe(res => this.aboutPage = res);
  }


}
