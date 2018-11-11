import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  colors = ["lightblue", "lightpink"];

  title = "Moctar Diallo";
  subtitle = "Software Engineer";

  items = [
    {
      name: "HOME",
      link: ""
    },
    {
      name: "ABOUT ME",
      link: "about"
    },
    {
      name: "MY SERVICES",
      link: "services"
    },
    {
      name: "MY SKILLS",
      link: "skills"
    },
    {
      name: "MY WORK",
      link: "apps"
    },
    {
      name: "CONTACT ME",
      link: "contact"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
