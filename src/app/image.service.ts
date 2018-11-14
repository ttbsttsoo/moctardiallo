import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  URL = "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjd3uSQ1NLeAhULLMAKHdDYDI0QjRx6BAgBEAU&url=https%3A%2F%2Fdevcode.la%2Fblog%2Ffrontend-y-backend%2F&psig=AOvVaw2_18dnA1SUIq5nz3aq5p93&ust=1542242753659952"

  constructor(private http: HttpClient) { }

  getImage(): Observable<string> {
    return this.http.get<string>(this.URL);
  }
}
