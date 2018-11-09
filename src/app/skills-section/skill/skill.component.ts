import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
color = 'primary';
  mode = 'determinate';
  bufferValue = 75;

  @Input()
  skill: string;

  @Input()
  value: number;

  constructor() { }

  ngOnInit() {
  }

}
