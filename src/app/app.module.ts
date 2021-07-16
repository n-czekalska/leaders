import { LeadersService } from "./services/leaders.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { LeaderComponent } from "./leader/leader.component";

@NgModule({
  declarations: [
    AppComponent,
    LeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [
    LeadersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
