import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsTypescriptComponent } from './what-is-typescript.component';

describe('WhatIsTypescriptComponent', () => {
  let component: WhatIsTypescriptComponent;
  let fixture: ComponentFixture<WhatIsTypescriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatIsTypescriptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhatIsTypescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
