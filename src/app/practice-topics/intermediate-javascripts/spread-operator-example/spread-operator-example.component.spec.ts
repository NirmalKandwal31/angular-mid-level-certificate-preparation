import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpreadOperatorExampleComponent } from './spread-operator-example.component';

describe('SpreadOperatorExampleComponent', () => {
  let component: SpreadOperatorExampleComponent;
  let fixture: ComponentFixture<SpreadOperatorExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpreadOperatorExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpreadOperatorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
