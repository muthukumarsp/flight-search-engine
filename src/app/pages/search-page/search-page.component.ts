import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';

@Component({
    selector: 'app-search-page',
    templateUrl: './search-page.component.html',
    styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
    public flightSearchDetails: any;
    public priceRangeFromSearchResults: number[];
    public flightsFiltered: any;
    private flights: any;

    constructor() {
        this.flightSearchDetails = {};
        this.flights = [];
        this.flightsFiltered = [];
        this.priceRangeFromSearchResults = [0, 100];
    }

    ngOnInit() {
    }

    public handleSearchResult($event) {
        this.flightSearchDetails = $event;
        this.flightsFiltered = $event.flights;
        this.flights = _.cloneDeep($event.flights); // duplicate the result
        let minFare = this.flightsFiltered.reduce((prev, next) => {
            return ( prev.price >= next.price ? next : prev);
        });
        let maxFare = this.flightsFiltered.reduce((prev, next) => {
            return ( prev.price <= next.price ? next : prev);
        });
        console.log("Data received in search page", $event, "min", minFare, "max = ", maxFare);
        this.priceRangeFromSearchResults[0] = minFare.price;
        this.priceRangeFromSearchResults[1] = maxFare.price;
    }

    public handlePriceRangeChange(ranges: number[]) {
        console.log("Ranges in search page", ranges);
        this.flightsFiltered = this.filterFlightsByPrice(this.flights, ranges);

    }

    private filterFlightsByPrice(flights: any, ranges: number[]) {
        let result = flights.filter((flight) => {
            return ( flight.price >= ranges[0] && flight.price <= ranges[1] );
        });
        return result;
    }
}
