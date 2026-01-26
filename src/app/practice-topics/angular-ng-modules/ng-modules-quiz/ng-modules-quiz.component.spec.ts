import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModulesQuizComponent } from './ng-modules-quiz.component';

describe('NgModulesQuizComponent', () => {
  let component: NgModulesQuizComponent;
  let fixture: ComponentFixture<NgModulesQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgModulesQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgModulesQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
