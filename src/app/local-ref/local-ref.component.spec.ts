import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalRefComponent } from './local-ref.component';

describe('LocalRefComponent', () => {
  let component: LocalRefComponent;
  let fixture: ComponentFixture<LocalRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
