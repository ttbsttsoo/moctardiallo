import { Component, OnInit } from "@angular/core";
import { ColorsService } from "../colors.service";

@Component({
  selector: "app-services-section",
  templateUrl: "./services-section.component.html",
  styleUrls: ["./services-section.component.css"]
})
export class ServicesSectionComponent implements OnInit {
  colors: string[];
  constructor(private colorsService: ColorsService) {}

  ngOnInit() {
    this.colorsService.getColors().subscribe(colors => (this.colors = colors));
  }
}
