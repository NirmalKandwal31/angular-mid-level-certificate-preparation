import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeslaProjectWithoutSignalComponent } from './tesla-project-without-signal.component';

describe('TeslaProjectWithoutSignalComponent', () => {
  let component: TeslaProjectWithoutSignalComponent;
  let fixture: ComponentFixture<TeslaProjectWithoutSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeslaProjectWithoutSignalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeslaProjectWithoutSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
