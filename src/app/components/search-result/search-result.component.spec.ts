/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchResultComponent} from './search-result.component';
import {FlightDetailBoxComponent} from '../flight-detail-box/flight-detail-box.component';
import {FlightSearchFixture} from '../../../test/fixtures/flight-search-fixture';

describe('SearchResultComponent', () => {
    let component: SearchResultComponent;
    let fixture: ComponentFixture<SearchResultComponent>;

    let flightSearchFixture: FlightSearchFixture = new FlightSearchFixture();
    let expectedResult: any = flightSearchFixture.getResults();

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SearchResultComponent,
                FlightDetailBoxComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchResultComponent);
        component = fixture.componentInstance;
        component.flightDetail = expectedResult[0].flights[0];
        console.log(component);
        console.log(expectedResult[0].flights[0]);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
        component.flightDetail = expectedResult[0].flights[1];
        fixture.detectChanges();
        fixture.whenStable().then(() => { // wait for async getQuote
            // fixture.detectChanges();        // update view with quote
            console.log(JSON.stringify(component));
            // expect(component.flight).toEqual(expectedResult[0].flights[1]);
        });


    });
});
