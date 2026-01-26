import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModuleDecoratorPropertiesComponent } from './ng-module-decorator-properties.component';

describe('NgModuleDecoratorPropertiesComponent', () => {
  let component: NgModuleDecoratorPropertiesComponent;
  let fixture: ComponentFixture<NgModuleDecoratorPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgModuleDecoratorPropertiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgModuleDecoratorPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
