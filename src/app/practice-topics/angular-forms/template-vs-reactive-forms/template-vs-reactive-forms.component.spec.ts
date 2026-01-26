import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateVsReactiveFormsComponent } from './template-vs-reactive-forms.component';

describe('TemplateVsReactiveFormsComponent', () => {
  let component: TemplateVsReactiveFormsComponent;
  let fixture: ComponentFixture<TemplateVsReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateVsReactiveFormsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateVsReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
