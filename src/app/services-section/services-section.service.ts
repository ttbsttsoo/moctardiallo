import { SERVICES } from "./mock-services-section";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Service } from "./service";

@Injectable({
  providedIn: "root"
})
export class ServicesSectionService {
  constructor() {}

  getServices(): Observable<Service[]> {
    return of(SERVICES);
  }
}
