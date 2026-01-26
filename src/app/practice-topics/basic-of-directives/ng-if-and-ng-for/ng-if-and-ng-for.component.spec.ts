import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfAndNgForComponent } from './ng-if-and-ng-for.component';

describe('NgIfAndNgForComponent', () => {
  let component: NgIfAndNgForComponent;
  let fixture: ComponentFixture<NgIfAndNgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgIfAndNgForComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgIfAndNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
