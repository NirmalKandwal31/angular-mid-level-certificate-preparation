import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructorSyntaxOptionsComponent } from './constructor-syntax-options.component';

describe('ConstructorSyntaxOptionsComponent', () => {
  let component: ConstructorSyntaxOptionsComponent;
  let fixture: ComponentFixture<ConstructorSyntaxOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConstructorSyntaxOptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConstructorSyntaxOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
