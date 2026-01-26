import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NullCoalescingExampleComponent } from './null-coalescing-example.component';

describe('NullCoalescingExampleComponent', () => {
  let component: NullCoalescingExampleComponent;
  let fixture: ComponentFixture<NullCoalescingExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NullCoalescingExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NullCoalescingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
