import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Meeting } from "./../pipe-test/pipe-test.component";

@Injectable({
  providedIn: "root"
})
export class MeetingService {
  constructor(private http: Http) {}
  saveMeetings(meetings: Meeting[]) {
    return this.http.put(
      "https://safari-course-app.firebaseio.com/meetings.json",
      meetings
    );
  }
  getMeetings(): Observable<Meeting[]> {
    return this.http
      .get("https://safari-course-app.firebaseio.com/meetings.json")
      .pipe(
        map(response => {
          console.log(response);
          return response.json();
        })
      );
  }
}
