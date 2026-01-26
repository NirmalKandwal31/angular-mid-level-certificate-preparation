import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateStringsComponent } from './template-strings.component';

describe('TemplateStringsComponent', () => {
  let component: TemplateStringsComponent;
  let fixture: ComponentFixture<TemplateStringsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateStringsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateStringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
