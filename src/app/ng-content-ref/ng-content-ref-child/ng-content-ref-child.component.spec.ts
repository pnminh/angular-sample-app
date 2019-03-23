import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentRefChildComponent } from './ng-content-ref-child.component';

describe('NgContentRefChildComponent', () => {
  let component: NgContentRefChildComponent;
  let fixture: ComponentFixture<NgContentRefChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgContentRefChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContentRefChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
