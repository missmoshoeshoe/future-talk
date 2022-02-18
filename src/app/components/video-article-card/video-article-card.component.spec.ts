import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoArticleCardComponent } from './video-article-card.component';

describe('VideoArticleCardComponent', () => {
  let component: VideoArticleCardComponent;
  let fixture: ComponentFixture<VideoArticleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoArticleCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoArticleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
