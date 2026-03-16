import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeProjectListComponent } from './practice-project-list.component';

describe('PracticeProjectListComponent', () => {
  let component: PracticeProjectListComponent;
  let fixture: ComponentFixture<PracticeProjectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeProjectListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PracticeProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
