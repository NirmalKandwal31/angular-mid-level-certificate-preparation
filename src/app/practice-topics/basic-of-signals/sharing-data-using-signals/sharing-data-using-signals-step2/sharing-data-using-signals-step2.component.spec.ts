import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharingDataUsingSignalsStep2Component } from './sharing-data-using-signals-step2.component';

describe('SharingDataUsingSignalsStep2Component', () => {
  let component: SharingDataUsingSignalsStep2Component;
  let fixture: ComponentFixture<SharingDataUsingSignalsStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharingDataUsingSignalsStep2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharingDataUsingSignalsStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
