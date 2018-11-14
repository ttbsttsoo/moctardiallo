import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Contact } from "./contact";
import { CONTACT } from "./mock-contact";
import { HttpClient } from "@angular/common/http"


@Injectable({
  providedIn: "root"
})
export class ContactService {

  URL = "http://127.0.0.1:8000/contact/contact/";
  
  constructor(private http: HttpClient) {}

  getContact(): Observable<Contact> {
    return this.http.get<Contact>(this.URL)
  }
}
