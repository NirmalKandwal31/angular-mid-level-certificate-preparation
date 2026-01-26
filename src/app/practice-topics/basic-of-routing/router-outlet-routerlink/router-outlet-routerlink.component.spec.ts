import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterOutletRouterlinkComponent } from './router-outlet-routerlink.component';

describe('RouterOutletRouterlinkComponent', () => {
  let component: RouterOutletRouterlinkComponent;
  let fixture: ComponentFixture<RouterOutletRouterlinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterOutletRouterlinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RouterOutletRouterlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
