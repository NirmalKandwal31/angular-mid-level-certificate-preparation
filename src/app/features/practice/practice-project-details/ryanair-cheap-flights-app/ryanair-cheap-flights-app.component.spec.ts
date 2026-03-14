import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RyanairCheapFlightsAppComponent } from './ryanair-cheap-flights-app.component';

describe('RyanairCheapFlightsAppComponent', () => {
  let component: RyanairCheapFlightsAppComponent;
  let fixture: ComponentFixture<RyanairCheapFlightsAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RyanairCheapFlightsAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RyanairCheapFlightsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
