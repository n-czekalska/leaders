import { LeadersResponse } from "./models/leaders-response";
import { LeadersService } from "./services/leaders.service";
import { Component, OnInit } from "@angular/core";
import { Leader } from "./models/leader";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  leadersData$: Promise<LeadersResponse>;
  showDetails = false;
  selectedLeader: Leader;

  constructor( private leadersService: LeadersService) {}

  ngOnInit(): void {
    this.leadersData$ = this.leadersService.get();
  }

  displayLeader(leader: Leader): void {
    this.showDetails = true;
    this.selectedLeader = leader;
  }

  displayAll(value: boolean): void {
    this.showDetails = !value;
  }
}
