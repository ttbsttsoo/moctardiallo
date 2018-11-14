import { APPS } from "./mock-apps";
import { Work } from "./work";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: "root"
})
export class WorkService {

  URL = "http://127.0.0.1:8000/mywork/mywork/";
  
  constructor(private http: HttpClient) {}

  getWork(): Observable<Work[]> {
    return this.http.get<Work[]>(this.URL)
  }
}
