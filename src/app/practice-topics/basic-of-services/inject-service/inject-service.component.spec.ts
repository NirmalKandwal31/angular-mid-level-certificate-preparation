import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectServiceComponent } from './inject-service.component';

describe('InjectServiceComponent', () => {
  let component: InjectServiceComponent;
  let fixture: ComponentFixture<InjectServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InjectServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InjectServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
