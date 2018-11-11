import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Contact } from "./contact";
import { CONTACT } from "./mock-contact";

@Injectable({
  providedIn: "root"
})
export class ContactService {
  constructor() {}

  getContact(): Observable<Contact> {
    return of(CONTACT);
  }
}
