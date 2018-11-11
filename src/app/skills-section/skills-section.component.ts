import { SKILLS } from "./mock-skills";
import { Component, OnInit } from "@angular/core";
import { Skill } from "./skill";
import { SkillsService } from "./skills.service";

@Component({
  selector: "app-skills-section",
  templateUrl: "./skills-section.component.html",
  styleUrls: ["./skills-section.component.css"]
})
export class SkillsSectionComponent implements OnInit {
  title = "My Speciality";

  subtitle = "My Skills";

  skills: Skill[];
  constructor(private skillsService: SkillsService) {}

  ngOnInit() {
    this.skillsService.getSills().subscribe(skills => (this.skills = skills));
  }
}
