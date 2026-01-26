import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentChildDecoratorChildComponent } from './content-child-decorator-child.component';

describe('ContentChildDecoratorChildComponent', () => {
  let component: ContentChildDecoratorChildComponent;
  let fixture: ComponentFixture<ContentChildDecoratorChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentChildDecoratorChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentChildDecoratorChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
