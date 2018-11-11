import { Component, OnInit } from "@angular/core";
import { AboutService } from "./about.service";
import { Topic } from "./topic";

@Component({
  selector: "app-about-section",
  templateUrl: "./about-section.component.html",
  styleUrls: ["./about-section.component.css"]
})
export class AboutSectionComponent implements OnInit {
  title = " About Us ";
  subtitle = " Who I Am ? ";
  text = `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa omnis doloremque ad incidunt sunt dicta facilis tempore neque minima! Nihil perferendis aut saepe amet? Reprehenderit quod ratione adipisci a dolore.
  `;
  topics: Topic[];
  constructor(private topicsService: AboutService) {}

  ngOnInit() {
    this.topicsService.getTopics().subscribe(topics => (this.topics = topics));
  }
}
