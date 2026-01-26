import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesQuizComponent } from './services-quiz.component';

describe('ServicesQuizComponent', () => {
  let component: ServicesQuizComponent;
  let fixture: ComponentFixture<ServicesQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
