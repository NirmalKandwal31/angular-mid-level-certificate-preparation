import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCssClassesComponent } from './form-css-classes.component';

describe('FormCssClassesComponent', () => {
  let component: FormCssClassesComponent;
  let fixture: ComponentFixture<FormCssClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCssClassesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormCssClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
