import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopVideoCardComponent } from './top-video-card.component';

describe('TopVideoCardComponent', () => {
  let component: TopVideoCardComponent;
  let fixture: ComponentFixture<TopVideoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopVideoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopVideoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
