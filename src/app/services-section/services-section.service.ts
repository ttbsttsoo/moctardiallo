import { SERVICES } from "./mock-services-section";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Service } from "./service";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ServicesSectionService {
  URL = "http://127.0.0.1:8000/services/services/";

  constructor(private http: HttpClient) {}

  getServices(): Observable<Service[]> {
    let response = this.http.get<Service[]>(this.URL);
    response.subscribe(services => 
    {
      console.log(services);
      // services[0].image = "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiki6qy2dLeAhXkC8AKHdUvAeAQjRx6BAgBEAU&url=https%3A%2F%2Fdevcode.la%2Fblog%2Ffrontend-y-backend%2F&psig=AOvVaw2_18dnA1SUIq5nz3aq5p93&ust=1542242753659952";
      // services[1].image = "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiki6qy2dLeAhXkC8AKHdUvAeAQjRx6BAgBEAU&url=https%3A%2F%2Fdevcode.la%2Fblog%2Ffrontend-y-backend%2F&psig=AOvVaw2_18dnA1SUIq5nz3aq5p93&ust=1542242753659952";

    });
    return response;
  }
}
