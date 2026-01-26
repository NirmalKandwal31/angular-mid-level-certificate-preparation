import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModuleOverviewComponent } from './app-module-overview.component';

describe('AppModuleOverviewComponent', () => {
  let component: AppModuleOverviewComponent;
  let fixture: ComponentFixture<AppModuleOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModuleOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppModuleOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
