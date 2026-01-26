import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOfComponentsQuizComponent } from './basic-of-components-quiz.component';

describe('BasicOfComponentsQuizComponent', () => {
  let component: BasicOfComponentsQuizComponent;
  let fixture: ComponentFixture<BasicOfComponentsQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicOfComponentsQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicOfComponentsQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
