import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptQuizComponent } from './typescript-quiz.component';

describe('TypescriptQuizComponent', () => {
  let component: TypescriptQuizComponent;
  let fixture: ComponentFixture<TypescriptQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypescriptQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypescriptQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
