import { Leader } from "../models/leader";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Description } from "../models/description";

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
    descriptions: Description[]

    ngOnInit(): void {
        this.title = this.leader.description[0].text;
        this.paragraph = this.leader.description[1].text;
        this.traitsTitle = this.leader.description[2].text;
        this.descriptions = this.leader.description.filter(x => x.cssClass === "list-item");
    }

    back(): void {
        this.displayAll.emit(true);
    }
}
