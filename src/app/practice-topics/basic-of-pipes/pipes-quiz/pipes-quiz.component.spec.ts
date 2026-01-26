import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesQuizComponent } from './pipes-quiz.component';

describe('PipesQuizComponent', () => {
  let component: PipesQuizComponent;
  let fixture: ComponentFixture<PipesQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipesQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipesQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
