import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewToolComponent } from './review-tool.component';

describe('ReviewToolComponent', () => {
  let component: ReviewToolComponent;
  let fixture: ComponentFixture<ReviewToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewToolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
