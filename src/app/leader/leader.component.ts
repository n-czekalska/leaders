import { Leader } from "../models/leader";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "leader-component",
  templateUrl: "./leader.component.html",
})
export class LeaderComponent implements OnInit {
  @Input() leader: Leader;

  ngOnInit(): void {
    this.leader
  }
}