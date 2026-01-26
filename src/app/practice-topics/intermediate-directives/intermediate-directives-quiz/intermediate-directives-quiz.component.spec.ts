import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediateDirectivesQuizComponent } from './intermediate-directives-quiz.component';

describe('IntermediateDirectivesQuizComponent', () => {
  let component: IntermediateDirectivesQuizComponent;
  let fixture: ComponentFixture<IntermediateDirectivesQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntermediateDirectivesQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntermediateDirectivesQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
