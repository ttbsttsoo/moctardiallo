import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css']
})
export class SkillsSectionComponent implements OnInit {

  title = "My Speciality";

  subtitle = "My Skills"

  skills = [
    {
      title: "Angular",
      value: 70
    },
{
      title: "Django",
      value: 75
    },
{
      title: "Python",
      value: 95
    },
{
      title: "Tensorflow",
      value: 80
    },
{
      title: "Git",
      value: 60
    },
{
      title: "Agile",
      value: 50
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
