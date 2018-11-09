import { Component, OnInit, Input } from "@angular/core";
import { ColorsService } from "src/app/colors.service";

@Component({
  selector: "app-service",
  templateUrl: "./service.component.html",
  styleUrls: ["./service.component.css"]
})
export class ServiceComponent implements OnInit {
  @Input()
  title: string;

  @Input()
  content:string;

  colors: string[];

  @Input()
  image:string;

  constructor(private colorsService: ColorsService) {}

  ngOnInit() {
    this.colorsService.getColors().subscribe(colors => (this.colors = colors));
  }
}
