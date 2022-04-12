import { Component, OnInit } from '@angular/core';
import { SideContentService } from './side-content.service';

@Component({
  selector: 'app-side-content',
  templateUrl: './side-content.component.html',
  styleUrls: ['./side-content.component.scss']
})
export class SideContentComponent implements OnInit {

  advertData: any;

  constructor(private myService:  SideContentService) { }

  ngOnInit(): void {
    this.myService.getAdvertData()
    .subscribe(res => this.advertData = res);

  }

}
