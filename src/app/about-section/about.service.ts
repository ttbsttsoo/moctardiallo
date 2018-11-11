import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Topic } from "./topic";
import { TOPICS } from "./mock-topics";

@Injectable({
  providedIn: "root"
})
export class AboutService {
  constructor() {}

  getTopics(): Observable<Topic[]> {
    return of(TOPICS);
  }
}
