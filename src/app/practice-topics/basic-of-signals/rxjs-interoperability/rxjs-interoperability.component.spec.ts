import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsInteroperabilityComponent } from './rxjs-interoperability.component';

describe('RxjsInteroperabilityComponent', () => {
  let component: RxjsInteroperabilityComponent;
  let fixture: ComponentFixture<RxjsInteroperabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsInteroperabilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RxjsInteroperabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
