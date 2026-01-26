import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsObservablesExamplesComponent } from './rxjs-observables-examples.component';

describe('RxjsObservablesExamplesComponent', () => {
  let component: RxjsObservablesExamplesComponent;
  let fixture: ComponentFixture<RxjsObservablesExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsObservablesExamplesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RxjsObservablesExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
