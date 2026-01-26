import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharingDataWithoutSignalsStep2Component } from './sharing-data-without-signals-step-2.component';

describe('SharingDataWithoutSignalsStep2Component', () => {
  let component: SharingDataWithoutSignalsStep2Component;
  let fixture: ComponentFixture<SharingDataWithoutSignalsStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharingDataWithoutSignalsStep2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharingDataWithoutSignalsStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
