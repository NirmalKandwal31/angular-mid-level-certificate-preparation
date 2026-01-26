import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediateTypescriptQuizComponent } from './intermediate-typescript-quiz.component';

describe('IntermediateTypescriptQuizComponent', () => {
  let component: IntermediateTypescriptQuizComponent;
  let fixture: ComponentFixture<IntermediateTypescriptQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntermediateTypescriptQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntermediateTypescriptQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
