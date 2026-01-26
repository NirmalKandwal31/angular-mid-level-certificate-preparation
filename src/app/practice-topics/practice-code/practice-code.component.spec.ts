import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeCodeComponent } from './practice-code.component';

describe('PracticeCodeComponent', () => {
  let component: PracticeCodeComponent;
  let fixture: ComponentFixture<PracticeCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeCodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PracticeCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
