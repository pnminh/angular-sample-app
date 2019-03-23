import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-todo-control",
  templateUrl: "./todo-control.component.html",
  styleUrls: ["./todo-control.component.css"]
})
export class TodoControlComponent implements OnInit {
  @Output("itemDiscription") descriptionEmitter = new EventEmitter<string>();
  description: string;
  constructor() {}

  ngOnInit() {}
  addOrDelete() {
    this.descriptionEmitter.emit(this.description);
  }
}
