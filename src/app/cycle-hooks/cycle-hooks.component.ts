import { Component, OnInit, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-cycle-hooks",
  templateUrl: "./cycle-hooks.component.html",
  styleUrls: ["./cycle-hooks.component.css"]
})
export class CycleHooksComponent implements OnInit {
  books: Book[] = [];
  displayedText = "";
  constructor() {}

  ngOnInit() {}

  getChangeTestText(input: HTMLInputElement) {
    this.displayedText = input.value;
  }
  addBook() {
    this.books.push({
      title: `book #${Math.random()}`,
      description: `description #${Math.random()}`,
      note: `note #${Math.random()}`
    });
  }
  deleteBook() {
    this.books.pop();
  }
}
export interface Book {
  title: string;
  description: string;
  note: string;
}
