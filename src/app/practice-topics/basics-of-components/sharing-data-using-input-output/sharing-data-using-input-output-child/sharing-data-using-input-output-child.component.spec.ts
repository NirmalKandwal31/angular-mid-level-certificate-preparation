import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharingDataUsingInputOutputChildComponent } from './sharing-data-using-input-output-child.component';

describe('SharingDataUsingInputOutputChildComponent', () => {
  let component: SharingDataUsingInputOutputChildComponent;
  let fixture: ComponentFixture<SharingDataUsingInputOutputChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharingDataUsingInputOutputChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharingDataUsingInputOutputChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
