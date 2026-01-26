import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeSyntaxParamsComponent } from './pipe-syntax-params.component';

describe('PipeSyntaxParamsComponent', () => {
  let component: PipeSyntaxParamsComponent;
  let fixture: ComponentFixture<PipeSyntaxParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeSyntaxParamsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipeSyntaxParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
