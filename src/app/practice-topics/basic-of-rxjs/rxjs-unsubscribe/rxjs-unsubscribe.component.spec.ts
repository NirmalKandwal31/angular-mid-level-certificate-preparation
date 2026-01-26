import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsUnsubscribeComponent } from './rxjs-unsubscribe.component';

describe('RxjsUnsubscribeComponent', () => {
  let component: RxjsUnsubscribeComponent;
  let fixture: ComponentFixture<RxjsUnsubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsUnsubscribeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RxjsUnsubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
