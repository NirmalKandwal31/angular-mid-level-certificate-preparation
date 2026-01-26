import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoistingLetVarExampleComponent } from './hoisting-let-var-example.component';

describe('HoistingLetVarExampleComponent', () => {
  let component: HoistingLetVarExampleComponent;
  let fixture: ComponentFixture<HoistingLetVarExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoistingLetVarExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HoistingLetVarExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
