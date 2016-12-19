import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';

@Component({
    selector: 'app-flight-detail-box',
    templateUrl: './flight-detail-box.component.html',
    styleUrls: ['./flight-detail-box.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FlightDetailBoxComponent implements OnInit {

    @Input() flight_number: string;
    @Input() fromCity: string;
    @Input() destinationCity: string;
    @Input() departTime: string;
    @Input() arriveTime: string;

    constructor() {
    }

    ngOnInit() {
    }

}
