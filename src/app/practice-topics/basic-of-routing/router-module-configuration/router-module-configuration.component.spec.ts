import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterModuleConfigurationComponent } from './router-module-configuration.component';

describe('RouterModuleConfigurationComponent', () => {
  let component: RouterModuleConfigurationComponent;
  let fixture: ComponentFixture<RouterModuleConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModuleConfigurationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RouterModuleConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
