import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowProcessesComponent } from './follow-processes.component';

describe('FollowProcessesComponent', () => {
  let component: FollowProcessesComponent;
  let fixture: ComponentFixture<FollowProcessesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowProcessesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowProcessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
