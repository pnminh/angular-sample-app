import { Component, OnInit } from "@angular/core";
import * as firebase from 'firebase';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "safari-course-app";

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyBBKmI08HF8paIIgsbreamZevzC_aosuDw",
    authDomain: "ng-recipe-b4231.firebaseapp.com",
    })
  }
}
