import {Component, OnInit, ViewEncapsulation, Input, SimpleChanges} from '@angular/core';

@Component({
    selector: 'app-search-result',
    templateUrl: './search-result.component.html',
    styleUrls: ['./search-result.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SearchResultComponent implements OnInit {

    @Input() flightDetail: any;
    public flight: any;

    constructor() {
        this.flight = {};
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log("changes", changes);
        this.flight = changes["flightDetail"].currentValue;

    }

}
