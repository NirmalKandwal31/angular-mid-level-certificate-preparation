import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadRouteParamsComponent } from './read-route-params.component';

describe('ReadRouteParamsComponent', () => {
  let component: ReadRouteParamsComponent;
  let fixture: ComponentFixture<ReadRouteParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadRouteParamsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReadRouteParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
