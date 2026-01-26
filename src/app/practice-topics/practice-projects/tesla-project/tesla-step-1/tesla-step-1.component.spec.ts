import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeslaStep1Component } from './tesla-step-1.component';

describe('TeslaStep1Component', () => {
  let component: TeslaStep1Component;
  let fixture: ComponentFixture<TeslaStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeslaStep1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeslaStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
