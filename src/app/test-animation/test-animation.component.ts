import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";
@Component({
  selector: "app-test-animation",
  templateUrl: "./test-animation.component.html",
  styleUrls: ["./test-animation.component.css"],
  animations: [
    trigger("divAnimation", [
      state(
        "normal",
        style({
          backgroundColor: "red",
          transform: "translateX(0)"
        })
      ),
      state(
        "righty",
        style({
          backgroundColor: "blue",
          transform: "translateX(100px)"
        })
      ),
      transition("normal => righty", animate(300)),
      transition("righty=>normal", animate(600))
    ]),
    trigger("divShrink", [
      state(
        "normal",
        style({
          backgroundColor: "red",
          transform: "translateX(0)"
        })
      ),
      state(
        "righty",
        style({
          backgroundColor: "blue",
          transform: "translateX(100px)"
        })
      ),state(
        "shrunk",
        style({
          backgroundColor: "yellow",
          transform: "scale(0.5)"
        })
      ),
      transition("normal <=> righty", animate(300)),
      transition("shrunk<=>*", animate(500))
    ])
  ]
})
export class TestAnimationComponent implements OnInit {
  items: string[] = [];
  animationState: string = "normal";
  shrinkState = "normal";
  constructor() {}

  ngOnInit() {}
  onAnimate() {
    this.animationState =
      this.animationState === "normal" ? "righty" : "normal";
    this.shrinkState = this.shrinkState === "normal" ? "righty" : "normal";
  }
  onShrink() {
    this.shrinkState = "shrunk";
  }
  addItem(textInput: HTMLInputElement) {
    this.items.push(textInput.value);
    textInput.value = null;
  }
  onDelete(item: string) {
    this.items = this.items.filter(itemLc => itemLc !== item);
  }
}
