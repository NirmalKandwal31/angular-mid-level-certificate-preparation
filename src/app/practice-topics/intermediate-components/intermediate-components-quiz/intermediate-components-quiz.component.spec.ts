import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediateComponentsQuizComponent } from './intermediate-components-quiz.component';

describe('IntermediateComponentsQuizComponent', () => {
  let component: IntermediateComponentsQuizComponent;
  let fixture: ComponentFixture<IntermediateComponentsQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntermediateComponentsQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntermediateComponentsQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
