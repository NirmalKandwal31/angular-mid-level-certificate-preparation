import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingQuizComponent } from './routing-quiz.component';

describe('RoutingQuizComponent', () => {
  let component: RoutingQuizComponent;
  let fixture: ComponentFixture<RoutingQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoutingQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
