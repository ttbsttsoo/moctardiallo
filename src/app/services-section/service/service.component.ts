import { Component, OnInit } from "@angular/core";
import { ColorsService } from "src/app/colors.service";

@Component({
  selector: "app-service",
  templateUrl: "./service.component.html",
  styleUrls: ["./service.component.css"]
})
export class ServiceComponent implements OnInit {
  title = "FrontEnd Development";
  content = `Lorem ipsum dolor sit amet consectetur 
  adipisicing elit. Animi, illum autem! Maiores quasi 
  `;

  colors: string[];

  image = "../assets/img/frontend.jpeg";

  constructor(private colorsService: ColorsService) {}

  ngOnInit() {
    this.colorsService.getColors().subscribe(colors => (this.colors = colors));
  }
}
