import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "safari-course-app";
  isRecipesPage = true;
  selectPage(page) {
    if (page == "recipes") this.isRecipesPage = true;
    else this.isRecipesPage = false;
  }
}
