import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesQuizComponent } from './directives-quiz.component';

describe('DirectivesQuizComponent', () => {
  let component: DirectivesQuizComponent;
  let fixture: ComponentFixture<DirectivesQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivesQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectivesQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
