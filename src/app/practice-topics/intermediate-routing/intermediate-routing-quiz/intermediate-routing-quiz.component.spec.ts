import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediateRoutingQuizComponent } from './intermediate-routing-quiz.component';

describe('IntermediateRoutingQuizComponent', () => {
  let component: IntermediateRoutingQuizComponent;
  let fixture: ComponentFixture<IntermediateRoutingQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntermediateRoutingQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntermediateRoutingQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
