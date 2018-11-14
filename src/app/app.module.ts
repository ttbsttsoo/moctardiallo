import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
// import {MatProgressBarModule} from '@angular/material/progress-bar';

import {
  MatButtonModule,
  MatDividerModule,
  MatCardModule,
  MatGridListModule,
  MatSidenavModule,
  MatProgressBarModule,
  MatSliderModule,
  MatFormFieldModule,
  MatInputModule
} from "@angular/material";
import { MenuComponent } from "./menu/menu.component";
import { MainComponent } from "./main/main.component";
import { ServicesSectionComponent } from "./services-section/services-section.component";
import { ServiceComponent } from "./services-section/service/service.component";
import { SkillsSectionComponent } from "./skills-section/skills-section.component";
import { SkillComponent } from "./skills-section/skill/skill.component";
import { WorkSectionComponent } from "./work-section/work-section.component";
import { WorkComponent } from "./work-section/work/work.component";
import { ContactSectionComponent } from "./contact-section/contact-section.component";
import { ContactFormComponent } from "./contact-section/contact-form/contact-form.component";
import { VoidSectionComponent } from "./void-section/void-section.component";
import { HomeSectionComponent } from "./home-section/home-section.component";
import { AboutSectionComponent } from "./about-section/about-section.component";
import { HttpClientModule } from "@angular/common/http";
import { ContactItemComponent } from './contact-section/contact-item/contact-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainComponent,
    ServicesSectionComponent,
    ServiceComponent,
    SkillsSectionComponent,
    SkillComponent,
    WorkSectionComponent,
    WorkComponent,
    ContactSectionComponent,
    ContactFormComponent,
    VoidSectionComponent,
    HomeSectionComponent,
    AboutSectionComponent,
    ContactItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatGridListModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
