import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudOperationExampleComponent } from './crud-operation-example.component';

describe('CrudOperationExampleComponent', () => {
  let component: CrudOperationExampleComponent;
  let fixture: ComponentFixture<CrudOperationExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudOperationExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudOperationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
