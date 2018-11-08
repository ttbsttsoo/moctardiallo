import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";

import { COLORS } from "./mock-colors";

@Injectable({
  providedIn: "root"
})
export class ColorsService {
  constructor() {}

  getColors(): Observable<string[]> {
    return of(COLORS);
  }
}
