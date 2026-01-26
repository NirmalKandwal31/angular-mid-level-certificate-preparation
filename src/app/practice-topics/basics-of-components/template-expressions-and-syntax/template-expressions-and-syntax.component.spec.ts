import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateExpressionsAndSyntaxComponent } from './template-expressions-and-syntax.component';

describe('TemplateExpressionsAndSyntaxComponent', () => {
  let component: TemplateExpressionsAndSyntaxComponent;
  let fixture: ComponentFixture<TemplateExpressionsAndSyntaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateExpressionsAndSyntaxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateExpressionsAndSyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
