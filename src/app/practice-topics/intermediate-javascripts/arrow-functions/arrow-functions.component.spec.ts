import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowFunctionsComponent } from './arrow-functions.component';

describe('ArrowFunctionsComponent', () => {
  let component: ArrowFunctionsComponent;
  let fixture: ComponentFixture<ArrowFunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrowFunctionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrowFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
