import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsComputedEffectComponent } from './signals-computed-effect.component';

describe('SignalsComputedEffectComponent', () => {
  let component: SignalsComputedEffectComponent;
  let fixture: ComponentFixture<SignalsComputedEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsComputedEffectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalsComputedEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
