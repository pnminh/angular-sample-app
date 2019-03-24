import { Component, Output, EventEmitter } from "@angular/core";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  constructor() {}
  @Output("selectEmitter") selectEmitter = new EventEmitter();
  selectPage(option: string) {
    this.selectEmitter.emit(option);
  }
}
