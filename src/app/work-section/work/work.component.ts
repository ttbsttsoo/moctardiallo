import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  @Input() 
  name: string;

  @Input()
  domain: string;

  @Input()
  logo: string;

  @Input()
  views: number;

  @Input()
  likes: number;

  @Input()
  shares: number;

  constructor() { }

  ngOnInit() {
  }

}
