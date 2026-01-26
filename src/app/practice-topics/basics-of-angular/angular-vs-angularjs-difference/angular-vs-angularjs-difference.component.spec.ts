import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularVsAngularjsDifferenceComponent } from './angular-vs-angularjs-difference.component';

describe('AngularVsAngularjsDifferenceComponent', () => {
  let component: AngularVsAngularjsDifferenceComponent;
  let fixture: ComponentFixture<AngularVsAngularjsDifferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularVsAngularjsDifferenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularVsAngularjsDifferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
