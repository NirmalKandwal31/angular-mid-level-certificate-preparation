import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhenToUseServicesComponent } from './when-to-use-services.component';

describe('WhenToUseServicesComponent', () => {
  let component: WhenToUseServicesComponent;
  let fixture: ComponentFixture<WhenToUseServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhenToUseServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhenToUseServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
