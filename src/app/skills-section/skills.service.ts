import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Skill } from "./skill";
import { SKILLS } from "./mock-skills";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SkillsService {
  SKILLS_URL = "http://127.0.0.1:8000/skills/skills";

  constructor(private http: HttpClient) {}

  getSills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.SKILLS_URL);
  }
}
