import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent implements OnInit {
  contact = {
    "addresses": [
      "info@moctardiallo.com",
      "Rue 11 x 8, Dakar Medina",
      "+221 77 857 75 00"
    ]
  }
  constructor() { }

  ngOnInit() {
  }

}
