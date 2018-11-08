import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";

import {
  MatButtonModule,
  MatDividerModule,
  MatCardModule,
  MatGridListModule,
  MatSidenavModule
} from "@angular/material";
import { MenuComponent } from "./menu/menu.component";
import { MainComponent } from "./main/main.component";
import { ServicesSectionComponent } from "./services-section/services-section.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainComponent,
    ServicesSectionComponent
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
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
