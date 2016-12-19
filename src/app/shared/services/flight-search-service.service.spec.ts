/* tslint:disable:no-unused-variable */

import {TestBed, inject} from '@angular/core/testing';
import {FlightSearchServiceService} from './flight-search-service.service';
import {HttpModule} from '@angular/http';

describe('FlightSearchServiceService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [FlightSearchServiceService],
        });
    });

    it('should ...', inject([FlightSearchServiceService], (service: FlightSearchServiceService) => {
        expect(service).toBeTruthy();
    }));
});
