import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalCharacteristicsComponent } from './signal-characteristics.component';

describe('SignalCharacteristicsComponent', () => {
  let component: SignalCharacteristicsComponent;
  let fixture: ComponentFixture<SignalCharacteristicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalCharacteristicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalCharacteristicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
