import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { MenuItem } from "./menu";
import { MENU } from "./mock-menu";

@Injectable({
  providedIn: "root"
})
export class MenuService {
  constructor() {}

  getMenuItems(): Observable<MenuItem[]> {
    return of(MENU);
  }
}
