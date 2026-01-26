import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneAndTwoWayBindingComponent } from './one-and-two-way-binding.component';

describe('OneAndTwoWayBindingComponent', () => {
  let component: OneAndTwoWayBindingComponent;
  let fixture: ComponentFixture<OneAndTwoWayBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneAndTwoWayBindingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OneAndTwoWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
