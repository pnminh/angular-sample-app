import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoControlComponent } from './todo-control.component';

describe('TodoControlComponent', () => {
  let component: TodoControlComponent;
  let fixture: ComponentFixture<TodoControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
