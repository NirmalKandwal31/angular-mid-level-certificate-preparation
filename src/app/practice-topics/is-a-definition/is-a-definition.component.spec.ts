import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsADefinitionComponent } from './is-a-definition.component';

describe('IsADefinitionComponent', () => {
  let component: IsADefinitionComponent;
  let fixture: ComponentFixture<IsADefinitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IsADefinitionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IsADefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
