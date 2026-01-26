import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudOperationUsingReactiveFormsExampleComponent } from './crud-operation-using-reactive-forms-example.component';

describe('CrudOperationUsingReactiveFormsExampleComponent', () => {
  let component: CrudOperationUsingReactiveFormsExampleComponent;
  let fixture: ComponentFixture<CrudOperationUsingReactiveFormsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudOperationUsingReactiveFormsExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudOperationUsingReactiveFormsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
