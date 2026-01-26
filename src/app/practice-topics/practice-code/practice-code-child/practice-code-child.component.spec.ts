import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeCodeChildComponent } from './practice-code-child.component';

describe('PracticeCodeChildComponent', () => {
  let component: PracticeCodeChildComponent;
  let fixture: ComponentFixture<PracticeCodeChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeCodeChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PracticeCodeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
