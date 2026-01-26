import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharingDataUsingInputOutputComponent } from './sharing-data-using-input-output.component';

describe('SharingDataUsingInputOutputComponent', () => {
  let component: SharingDataUsingInputOutputComponent;
  let fixture: ComponentFixture<SharingDataUsingInputOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharingDataUsingInputOutputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharingDataUsingInputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
