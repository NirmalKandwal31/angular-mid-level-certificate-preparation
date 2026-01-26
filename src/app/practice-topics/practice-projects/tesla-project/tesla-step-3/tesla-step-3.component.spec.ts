import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeslaStep3Component } from './tesla-step-3.component';

describe('TeslaStep3Component', () => {
  let component: TeslaStep3Component;
  let fixture: ComponentFixture<TeslaStep3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeslaStep3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeslaStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
