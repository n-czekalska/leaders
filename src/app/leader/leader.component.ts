import { Leader } from "../models/leader";
import { Component, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "leader-component",
  templateUrl: "./leader.component.html",
})
export class LeaderComponent {
  @Input() leader: Leader;
  @Output() displayLeader: EventEmitter<Leader> = new EventEmitter();

  showDetails(leader: Leader): void {
    this.displayLeader.emit(leader);
  }

}