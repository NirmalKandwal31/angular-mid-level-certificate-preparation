import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnionTypeExampleComponent } from './union-type-example.component';

describe('UnionTypeExampleComponent', () => {
  let component: UnionTypeExampleComponent;
  let fixture: ComponentFixture<UnionTypeExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnionTypeExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnionTypeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
