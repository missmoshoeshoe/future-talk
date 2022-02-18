import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideImageCardComponent } from './side-image-card.component';

describe('SideImageCardComponent', () => {
  let component: SideImageCardComponent;
  let fixture: ComponentFixture<SideImageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideImageCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideImageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
