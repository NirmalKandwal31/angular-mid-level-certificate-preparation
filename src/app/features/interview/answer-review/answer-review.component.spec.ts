import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerReviewComponent } from './answer-review.component';

describe('AnswerReviewComponent', () => {
  let component: AnswerReviewComponent;
  let fixture: ComponentFixture<AnswerReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnswerReviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnswerReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
