import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CycleHooksComponent } from './cycle-hooks.component';

describe('CycleHooksComponent', () => {
  let component: CycleHooksComponent;
  let fixture: ComponentFixture<CycleHooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CycleHooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CycleHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
