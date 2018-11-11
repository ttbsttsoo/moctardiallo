import { MenuService } from "./menu.service";
import { Component, OnInit } from "@angular/core";
import { MENU } from "./mock-menu";
import { MenuItem } from "./menu";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  colors = ["lightblue", "lightpink"];

  title = "Moctar Diallo";
  subtitle = "Software Engineer";

  items: MenuItem[];

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menuService
      .getMenuItems()
      .subscribe(menuItems => (this.items = menuItems));
  }
}
