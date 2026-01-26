import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsQuizComponent } from './rxjs-quiz.component';

describe('RxjsQuizComponent', () => {
  let component: RxjsQuizComponent;
  let fixture: ComponentFixture<RxjsQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RxjsQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
