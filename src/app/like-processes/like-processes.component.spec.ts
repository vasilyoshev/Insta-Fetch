import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeProcessesComponent } from './like-processes.component';

describe('LikeProcessesComponent', () => {
  let component: LikeProcessesComponent;
  let fixture: ComponentFixture<LikeProcessesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeProcessesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeProcessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
