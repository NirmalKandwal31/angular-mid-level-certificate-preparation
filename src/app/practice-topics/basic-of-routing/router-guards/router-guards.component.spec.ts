import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterGuardsComponent } from './router-guards.component';

describe('RouterGuardsComponent', () => {
  let component: RouterGuardsComponent;
  let fixture: ComponentFixture<RouterGuardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterGuardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RouterGuardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
