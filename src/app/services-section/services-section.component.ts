import { Component, OnInit } from "@angular/core";
import { ColorsService } from "../colors.service";
import { Service } from "./service";
import { ServicesSectionService } from "./services-section.service";
import { ImageService } from "./../image.service"

@Component({
  selector: "app-services-section",
  templateUrl: "./services-section.component.html",
  styleUrls: ["./services-section.component.css"]
})
export class ServicesSectionComponent implements OnInit {
  colors: string[];
  title = "What I Do ?";
  subtitle = "Here are some of my expertise";
  services: Service[];
  constructor(
    private colorsService: ColorsService,
    private servicesService: ServicesSectionService,
    private imageService: ImageService,
  ) {}

  ngOnInit() {
    this.colorsService.getColors().subscribe(colors => (this.colors = colors));
    this.getServices();
  }

  getServices(): void {
    this.servicesService
      .getServices()
      .subscribe(services => (this.services = services));
    // this.imageService.getImage().subscribe(image => this.services[0].image = image)
  }
}
