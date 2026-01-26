import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeDirectiveExampleComponent } from './attribute-directive-example.component';

describe('AttributeDirectiveExampleComponent', () => {
  let component: AttributeDirectiveExampleComponent;
  let fixture: ComponentFixture<AttributeDirectiveExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttributeDirectiveExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttributeDirectiveExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
