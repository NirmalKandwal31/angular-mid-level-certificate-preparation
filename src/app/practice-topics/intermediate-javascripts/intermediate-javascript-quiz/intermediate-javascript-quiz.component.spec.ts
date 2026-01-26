import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediateJavascriptQuizComponent } from './intermediate-javascript-quiz.component';

describe('IntermediateJavascriptQuizComponent', () => {
  let component: IntermediateJavascriptQuizComponent;
  let fixture: ComponentFixture<IntermediateJavascriptQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntermediateJavascriptQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntermediateJavascriptQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
