import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CycleHookChildComponent } from './cycle-hook-child.component';

describe('CycleHookChildComponent', () => {
  let component: CycleHookChildComponent;
  let fixture: ComponentFixture<CycleHookChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CycleHookChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CycleHookChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
