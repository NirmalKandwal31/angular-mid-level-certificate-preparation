import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashLocationStrategyComponent } from './hash-location-strategy.component';

describe('HashLocationStrategyComponent', () => {
  let component: HashLocationStrategyComponent;
  let fixture: ComponentFixture<HashLocationStrategyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HashLocationStrategyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HashLocationStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
