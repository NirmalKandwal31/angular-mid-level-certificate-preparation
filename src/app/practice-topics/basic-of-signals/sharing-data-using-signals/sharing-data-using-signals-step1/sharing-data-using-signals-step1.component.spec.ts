import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharingDataUsingSignalsStep1Component } from './sharing-data-using-signals-step1.component';

describe('SharingDataUsingSignalsStep1Component', () => {
  let component: SharingDataUsingSignalsStep1Component;
  let fixture: ComponentFixture<SharingDataUsingSignalsStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharingDataUsingSignalsStep1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharingDataUsingSignalsStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
