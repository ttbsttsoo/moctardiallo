import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-section',
  templateUrl: './work-section.component.html',
  styleUrls: ['./work-section.component.css']
})
export class WorkSectionComponent implements OnInit {
  title = "My Work";
  subtitle = "RECENT WORK";

  apps = [
    {
      name: "ChatBot",
      domain: "Artificial Intelligence",
      logo: "../assets/img/backend.jpeg",
      likes: 0,
      views: 0,
      shares: 0
    },
{
      name: "InfoSen",
      domain: "Web Design",
      logo: "../assets/img/frontend.jpeg",
      likes: 0,
      views: 0,
      shares: 0
    },
{
      name: "Kawtal",
      domain: "Web Development",
      logo: "../assets/img/frontbackend.png",
      likes: 0,
      views: 0,
      shares: 0
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
