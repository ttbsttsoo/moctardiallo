import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
color = 'primary';
  mode = 'determinate';
  value = 50;
  bufferValue = 75;
  constructor() { }

  ngOnInit() {
  }

}
