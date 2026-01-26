import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalGuardsComponent } from './functional-guards.component';

describe('FunctionalGuardsComponent', () => {
  let component: FunctionalGuardsComponent;
  let fixture: ComponentFixture<FunctionalGuardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunctionalGuardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FunctionalGuardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
