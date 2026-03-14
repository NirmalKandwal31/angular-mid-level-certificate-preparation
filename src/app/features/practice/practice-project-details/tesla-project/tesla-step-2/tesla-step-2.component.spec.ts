import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeslaStep2Component } from './tesla-step-2.component';

describe('TeslaStep2Component', () => {
  let component: TeslaStep2Component;
  let fixture: ComponentFixture<TeslaStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeslaStep2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeslaStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
