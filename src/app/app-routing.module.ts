import { SkillsSectionComponent } from "./skills-section/skills-section.component";
import { AboutSectionComponent } from "./about-section/about-section.component";
import { HomeSectionComponent } from "./home-section/home-section.component";
import { AppComponent } from "./app.component";
import { ServicesSectionComponent } from "./services-section/services-section.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WorkSectionComponent } from "./work-section/work-section.component";
import { ContactSectionComponent } from "./contact-section/contact-section.component";

const routes: Routes = [
  {
    path: "",
    component: HomeSectionComponent
  },
  {
    path: "home",
    component: HomeSectionComponent
  },
  {
    path: "about",
    component: AboutSectionComponent
  },
  {
    path: "services",
    component: ServicesSectionComponent
  },
  {
    path: "skills",
    component: SkillsSectionComponent
  },
  {
    path: "apps",
    component: WorkSectionComponent
  },
  {
    path: "contact",
    component: ContactSectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
