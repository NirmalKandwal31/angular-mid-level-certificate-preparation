import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestOperatorExampleComponent } from './rest-operator-example.component';

describe('RestOperatorExampleComponent', () => {
  let component: RestOperatorExampleComponent;
  let fixture: ComponentFixture<RestOperatorExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestOperatorExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestOperatorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
