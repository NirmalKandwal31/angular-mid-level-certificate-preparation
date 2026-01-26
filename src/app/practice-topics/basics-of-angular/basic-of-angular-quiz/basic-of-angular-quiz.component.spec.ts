import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOfAngularQuizComponent } from './basic-of-angular-quiz.component';

describe('BasicOfAngularQuizComponent', () => {
  let component: BasicOfAngularQuizComponent;
  let fixture: ComponentFixture<BasicOfAngularQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicOfAngularQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicOfAngularQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
