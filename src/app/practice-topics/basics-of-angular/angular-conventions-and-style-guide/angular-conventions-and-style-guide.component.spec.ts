import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularConventionsAndStyleGuideComponent } from './angular-conventions-and-style-guide.component';

describe('AngularConventionsAndStyleGuideComponent', () => {
  let component: AngularConventionsAndStyleGuideComponent;
  let fixture: ComponentFixture<AngularConventionsAndStyleGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularConventionsAndStyleGuideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularConventionsAndStyleGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
