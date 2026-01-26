import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonAngularPipesComponent } from './common-angular-pipes.component';

describe('CommonAngularPipesComponent', () => {
  let component: CommonAngularPipesComponent;
  let fixture: ComponentFixture<CommonAngularPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonAngularPipesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommonAngularPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
