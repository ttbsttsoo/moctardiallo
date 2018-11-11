import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ServiceComponent } from "./service/service.component";
import { ServicesSectionComponent } from "./services-section.component";

@NgModule({
  imports: [CommonModule],
  declarations: [ServiceComponent, ServicesSectionComponent],
  exports: [ServicesSectionComponent]
})
export class ServicesSectionModule {}
