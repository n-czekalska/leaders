import { LeadersResponse } from "./models/leaders-response";
import { LeadersService } from "./services/leaders.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  leadersData$: Promise<LeadersResponse>;

  constructor( private leadersService: LeadersService) {}

  ngOnInit(): void {
    this.leadersData$ = this.leadersService.get();
  }
}
