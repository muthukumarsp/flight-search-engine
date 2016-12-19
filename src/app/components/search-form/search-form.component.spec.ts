/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {SearchFormComponent} from './search-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlightSearchServiceService} from '../../shared/services/flight-search-service.service';
import {HttpModule} from '@angular/http';
import {FlightSearchFixture} from '../../../test/fixtures/flight-search-fixture';

describe('SearchFormComponent', () => {
    let component: SearchFormComponent;
    let fixture: ComponentFixture<SearchFormComponent>;
    let flightSearchFixture: FlightSearchFixture = new FlightSearchFixture();
    let expectedResult = flightSearchFixture.getResults();
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SearchFormComponent
            ],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                HttpModule
            ],
            providers: [FlightSearchServiceService
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        // console.log(component);
        expect(component).toBeDefined();

    });
    it('should test "isOneWayTrip" property', () => {
        expect(component.isOneWayTrip).toBeFalsy();
        component.handleOneWayTrip();
        expect(component.isOneWayTrip).toBeTruthy();
        component.handleReturnTrip();
        expect(component.isOneWayTrip).toBeFalsy();
    });

    it('should click "Search" button and search result', () => {
        let searchResult: any;
        let searchButton = fixture.debugElement.query(By.css('.submit-button-block__submit'));
        console.log("searchButton", searchButton);

        component.searchResult.subscribe((result: any) => searchResult = result);
        searchButton.nativeElement.click();
        fixture.detectChanges();
        console.log("expected result", expectedResult);
        console.log("search result", searchResult);
        expect(searchResult).toBeDefined();
    })
});
