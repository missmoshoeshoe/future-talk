import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopStoryCardComponent } from './top-story-card.component';

describe('TopStoryCardComponent', () => {
  let component: TopStoryCardComponent;
  let fixture: ComponentFixture<TopStoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopStoryCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopStoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
