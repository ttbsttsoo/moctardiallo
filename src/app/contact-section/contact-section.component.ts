import { Component, OnInit } from "@angular/core";
import { CONTACT } from "./mock-contact";
import { ContactService } from "./contact.service";
import { Contact } from "./contact";

@Component({
  selector: "app-contact-section",
  templateUrl: "./contact-section.component.html",
  styleUrls: ["./contact-section.component.css"]
})
export class ContactSectionComponent implements OnInit {
  title = "Get In Touch";
  subtitle = "CONTACT";
  contact: Contact;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contactService
      .getContact()
      .subscribe(contact => (this.contact = contact));
  }
}
