import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildDecoratorComponent } from './view-child-decorator.component';

describe('ViewChildDecoratorComponent', () => {
  let component: ViewChildDecoratorComponent;
  let fixture: ComponentFixture<ViewChildDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChildDecoratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewChildDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
