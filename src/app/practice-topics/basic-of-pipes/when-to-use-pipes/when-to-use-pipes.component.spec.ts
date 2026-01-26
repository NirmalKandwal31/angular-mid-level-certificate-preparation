import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhenToUsePipesComponent } from './when-to-use-pipes.component';

describe('WhenToUsePipesComponent', () => {
  let component: WhenToUsePipesComponent;
  let fixture: ComponentFixture<WhenToUsePipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhenToUsePipesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhenToUsePipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
