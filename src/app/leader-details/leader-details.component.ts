import { Leader } from "../models/leader";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: "leader-details",
    templateUrl: "./leader-details.component.html",
})
export class LeaderDetailsComponent implements OnInit {
    @Input() leader: Leader;
    @Output() displayAll: EventEmitter<boolean> = new EventEmitter();

    title: string;
    paragraph: string;

    traitsTitle: string;
    descriptions: string[]

    ngOnInit(): void {
        this.title = this.leader.description[0].text;
        this.paragraph = this.leader.description[1].text;
        this.traitsTitle = this.leader.description[2].text;
        this.descriptions = this.leader.description.filter(x => x.cssClass === "list-item").map(y => y.text);
    }

    back(): void {
        this.displayAll.emit(true);
    }
}