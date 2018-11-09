import { Component, OnInit } from "@angular/core";
import { ColorsService } from "../colors.service";

@Component({
  selector: "app-services-section",
  templateUrl: "./services-section.component.html",
  styleUrls: ["./services-section.component.css"]
})
export class ServicesSectionComponent implements OnInit {
  colors: string[];
  services = [
    {
      title: "FrontEnd Development",
      image: "assets/img/frontend.jpeg",
      content: `Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Animi, illum autem! Maiores quasi 
                `
    },
  {
      title: "Backend Development",
      image: "assets/img/backend.jpeg",
      content: `Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Animi, illum autem! Maiores quasi 
                `
    },
{
      title: "Python Development",
      image: "assets/img/frontend.jpeg",
      content: `Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Animi, illum autem! Maiores quasi 
                `
    },
{
      title: "AI",
      image: "assets/img/frontend.jpeg",
      content: `Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Animi, illum autem! Maiores quasi 
                `
    },
{
      title: "Machine Learning",
      image: "assets/img/frontend.jpeg",
      content: `Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Animi, illum autem! Maiores quasi 
                `
    },
{
      title: "Deep Learning",
      image: "assets/img/frontend.jpeg",
      content: `Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Animi, illum autem! Maiores quasi 
                `
    }
  ]
  constructor(private colorsService: ColorsService) {}

  ngOnInit() {
    this.colorsService.getColors().subscribe(colors => (this.colors = colors));
  }
}
