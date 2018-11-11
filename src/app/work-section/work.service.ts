import { APPS } from "./mock-apps";
import { Work } from "./work";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class WorkService {
  constructor() {}

  getWork(): Observable<Work[]> {
    return of(APPS);
  }
}
