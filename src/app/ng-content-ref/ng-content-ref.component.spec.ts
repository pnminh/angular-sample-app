import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentRefComponent } from './ng-content-ref.component';

describe('NgContentRefComponent', () => {
  let component: NgContentRefComponent;
  let fixture: ComponentFixture<NgContentRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgContentRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContentRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
