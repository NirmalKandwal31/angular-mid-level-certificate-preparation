import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectiveExampleComponent } from './structural-directive-example.component';

describe('StructuralDirectiveExampleComponent', () => {
  let component: StructuralDirectiveExampleComponent;
  let fixture: ComponentFixture<StructuralDirectiveExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralDirectiveExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructuralDirectiveExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
