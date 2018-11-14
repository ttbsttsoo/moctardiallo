import { MENU } from "./mock-menu";
import { MenuItem } from "./menu";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: "root"
})
export class MenuService {

  URL = "http://127.0.0.1:8000/menu/menu/";
  
  constructor(private http: HttpClient) {}

  getMenuItems(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(this.URL)
  }
}
