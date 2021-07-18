import { LeadersService } from "./services/leaders.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { LeaderComponent } from "./leader/leader.component";
import { LeaderDetailsComponent } from "./leader-details/leader-details.component";

@NgModule({
  declarations: [
    AppComponent,
    LeaderComponent,
    LeaderDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [
    LeadersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
