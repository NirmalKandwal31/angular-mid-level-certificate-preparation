import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnumsExampleComponent } from './enums-example.component';

describe('EnumsExampleComponent', () => {
  let component: EnumsExampleComponent;
  let fixture: ComponentFixture<EnumsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnumsExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnumsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
