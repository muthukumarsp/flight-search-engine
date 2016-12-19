/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { BrowserModule} from '@angular/platform-browser';
import {SearchPageComponent} from './search-page.component';
import {SearchFormComponent} from '../../components/search-form/search-form.component';
import {SliderComponent} from '../../components/slider/slider.component';
import {SearchResultComponent} from '../../components/search-result/search-result.component';
import {FlightDetailBoxComponent} from '../../components/flight-detail-box/flight-detail-box.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from '../../app-routing.module';
import {SliderModule} from 'primeng/components/slider/slider';
import {APP_BASE_HREF} from '@angular/common';
import {FlightSearchServiceService} from '../../shared/services/flight-search-service.service';
import {FlightSearchFixture} from '../../../test/fixtures/flight-search-fixture';

describe('SearchPageComponent', () => {
    let component: SearchPageComponent;
    let fixture: ComponentFixture<SearchPageComponent>;

    let flightSearchFixture: FlightSearchFixture = new FlightSearchFixture();
    let expectedResult: any = flightSearchFixture.getResults();

    // expectedResult = JSON.parse(expectedResult);
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SearchPageComponent,
                SearchFormComponent,
                SliderComponent,
                SearchResultComponent,
                FlightDetailBoxComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                HttpModule,
                AppRoutingModule,
                SliderModule,
                ReactiveFormsModule
            ],
            providers: [{provide: APP_BASE_HREF, useValue: '/'},
                FlightSearchServiceService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();

        expect(component.priceRangeFromSearchResults).toEqual([0, 100]);

    });

    it('should handle the "handleSearchResult" ', () => {
        component.handleSearchResult(expectedResult[0]);
    });

    it('should handle the "handlePriceRangeChange" ', () => {
        component.handleSearchResult(expectedResult[0]);
        component.handlePriceRangeChange([0, 600]);
        fixture.detectChanges();
        console.log(" expected result", expectedResult);
        console.log(component.flightsFiltered);
        expect(component.flightsFiltered.length).toEqual(2);
    });

});
