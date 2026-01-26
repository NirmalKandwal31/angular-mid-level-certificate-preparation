import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplateVsNgContainerComponent } from './ng-template-vs-ng-container.component';

describe('NgTemplateVsNgContainerComponent', () => {
  let component: NgTemplateVsNgContainerComponent;
  let fixture: ComponentFixture<NgTemplateVsNgContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgTemplateVsNgContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgTemplateVsNgContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
