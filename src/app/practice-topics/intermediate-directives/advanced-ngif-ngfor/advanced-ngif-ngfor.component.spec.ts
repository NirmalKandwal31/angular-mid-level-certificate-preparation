import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedNgifNgforComponent } from './advanced-ngif-ngfor.component';

describe('AdvancedNgifNgforComponent', () => {
  let component: AdvancedNgifNgforComponent;
  let fixture: ComponentFixture<AdvancedNgifNgforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvancedNgifNgforComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvancedNgifNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
