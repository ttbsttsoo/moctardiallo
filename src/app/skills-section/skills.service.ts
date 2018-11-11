import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Skill } from "./skill";
import { SKILLS } from "./mock-skills";

@Injectable({
  providedIn: "root"
})
export class SkillsService {
  constructor() {}

  getSills(): Observable<Skill[]> {
    return of(SKILLS);
  }
}
