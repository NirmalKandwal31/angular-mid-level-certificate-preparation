import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptSyntaxComponent } from './typescript-syntax.component';

describe('TypescriptSyntaxComponent', () => {
  let component: TypescriptSyntaxComponent;
  let fixture: ComponentFixture<TypescriptSyntaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypescriptSyntaxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypescriptSyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
