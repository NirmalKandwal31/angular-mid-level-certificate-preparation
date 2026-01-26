import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostListnerExampleComponent } from './host-listner-example.component';

describe('HostListnerExampleComponent', () => {
  let component: HostListnerExampleComponent;
  let fixture: ComponentFixture<HostListnerExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostListnerExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HostListnerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
