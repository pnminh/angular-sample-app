import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  todos = [
    { id: 1, description: "test description", complete: false },
    { id: 2, description: "to be announced", complete: true }
  ];
  constructor() {}

  ngOnInit() {}
  addEditItem(description: any) {
    console.log('test emitter')
    this.todos.push({
      id: Math.random(),
      description,
      complete: false
    });
  }
}
