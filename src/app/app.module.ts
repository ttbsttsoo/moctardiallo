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
  MatProgressBarModule
} from "@angular/material";
import { MenuComponent } from "./menu/menu.component";
import { MainComponent } from "./main/main.component";
import { ServicesSectionComponent } from "./services-section/services-section.component";
import { ServiceComponent } from './services-section/service/service.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { SkillComponent } from './skills-section/skill/skill.component';
import { WorkSectionComponent } from './work-section/work-section.component';
import { WorkComponent } from './work-section/work/work.component';

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
    WorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatGridListModule,
    MatSidenavModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
