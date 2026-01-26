import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsQuizComponent } from './forms-quiz.component';

describe('FormsQuizComponent', () => {
  let component: FormsQuizComponent;
  let fixture: ComponentFixture<FormsQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormsQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
