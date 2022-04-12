import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNameComponent } from './page-name.component';

describe('PageHeaderComponent', () => {
  let component: PageNameComponent;
  let fixture: ComponentFixture<PageNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
