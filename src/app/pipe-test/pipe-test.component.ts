import { Observable } from 'rxjs';
import { MeetingService } from "./../service/meeting.service";
import { Component, OnInit } from "@angular/core";
import * as faker from "faker";
import { isArray } from "util";
@Component({
  selector: "app-pipe-test",
  templateUrl: "./pipe-test.component.html",
  styleUrls: ["./pipe-test.component.css"]
})
export class PipeTestComponent implements OnInit {
  testString: string = faker.lorem.paragraph();
  meetings: Meeting[] = [];
  meetings$:Observable<Meeting[]>;
  searchTerm: string;
  constructor(private meetingService: MeetingService) {}

  ngOnInit() {
    /* for (let i = 0; i < 2; i++) {
      this.meetings.push({
        name: faker.lorem.slug(),
        description: faker.lorem.paragraph()
      });
    } */
    /* this.meetingService.getMeetings().subscribe(
      meetings => {
        console.log(meetings);
        this.meetings = meetings;
      },
      error => {
        console.log(error);
      }
    ); */
    this.meetings$ = this.meetingService.getMeetings();
  }
  addMeeting() {
    this.meetings.push({
      name: faker.lorem.slug(),
      description: faker.lorem.paragraph()
    });
  }
  saveMeetings() {
    this.meetingService.saveMeetings(this.meetings).subscribe(result => {
      console.log(result);
    });
  }
  getMeetings() {}
}
export interface Meeting {
  name: string;
  description: string;
}
