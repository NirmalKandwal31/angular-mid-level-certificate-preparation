import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharingDataUsingSignalsComponent } from './sharing-data-using-signals.component';

describe('SharingDataUsingSignalsComponent', () => {
  let component: SharingDataUsingSignalsComponent;
  let fixture: ComponentFixture<SharingDataUsingSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharingDataUsingSignalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharingDataUsingSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
