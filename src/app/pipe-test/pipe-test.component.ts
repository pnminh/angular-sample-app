import { Component, OnInit } from "@angular/core";
import * as faker from "faker";
@Component({
  selector: "app-pipe-test",
  templateUrl: "./pipe-test.component.html",
  styleUrls: ["./pipe-test.component.css"]
})
export class PipeTestComponent implements OnInit {
  testString: string = faker.lorem.paragraph();
  meetings: Meeting[] = [];
  searchTerm: string;
  constructor() {}

  ngOnInit() {
    for (let i = 0; i < 2; i++) {
      this.meetings.push({
        name: faker.lorem.slug(),
        description: faker.lorem.paragraph()
      });
    }
  }
  addMeeting() {
    this.meetings.push({
      name: faker.lorem.slug(),
      description: faker.lorem.paragraph()
    });
  }
}
export interface Meeting {
  name: string;
  description: string;
}
