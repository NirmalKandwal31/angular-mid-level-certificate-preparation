import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyInjectionBasicsComponent } from './dependency-injection-basics.component';

describe('DependencyInjectionBasicsComponent', () => {
  let component: DependencyInjectionBasicsComponent;
  let fixture: ComponentFixture<DependencyInjectionBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DependencyInjectionBasicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DependencyInjectionBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
