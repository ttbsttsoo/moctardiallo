import { WorkService } from "./work.service";
import { APPS } from "./mock-apps";
import { Component, OnInit } from "@angular/core";
import { Work } from "./work";

@Component({
  selector: "app-work-section",
  templateUrl: "./work-section.component.html",
  styleUrls: ["./work-section.component.css"]
})
export class WorkSectionComponent implements OnInit {
  title = "My Work";
  subtitle = "RECENT WORK";

  apps: Work[];

  constructor(private workService: WorkService) {}

  ngOnInit() {
    this.workService.getWork().subscribe(apps => (this.apps = apps));
  }
}
