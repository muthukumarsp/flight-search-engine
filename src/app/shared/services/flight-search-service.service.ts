import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {FlightSearchFixture} from '../../../test/fixtures/flight-search-fixture';
import {Observable} from 'rxjs';

@Injectable()
export class FlightSearchServiceService {

    private searchData: FlightSearchFixture = new FlightSearchFixture;

    constructor(private http: Http) {

    }

    public searchFlights(data: any): Observable<any> {
        return Observable.from(this.searchData.getResults());
    }

}
