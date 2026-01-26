import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharingDataWithoutSignalsComponent } from './sharing-data-without-signals.component';

describe('SharingDataWithoutSignalsComponent', () => {
  let component: SharingDataWithoutSignalsComponent;
  let fixture: ComponentFixture<SharingDataWithoutSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharingDataWithoutSignalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharingDataWithoutSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
