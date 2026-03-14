import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeslaProjectComponent } from './tesla-project.component';

describe('TeslaProjectComponent', () => {
  let component: TeslaProjectComponent;
  let fixture: ComponentFixture<TeslaProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeslaProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeslaProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
