import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharingDataWithoutSignalsStep1Component } from './sharing-data-without-signals-step-1.component';

describe('SharingDataWithoutSignalsStep1Component', () => {
  let component: SharingDataWithoutSignalsStep1Component;
  let fixture: ComponentFixture<SharingDataWithoutSignalsStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharingDataWithoutSignalsStep1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharingDataWithoutSignalsStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
