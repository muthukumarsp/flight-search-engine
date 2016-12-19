/* tslint:disable:no-unused-variable */

import {TestBed, async} from '@angular/core/testing';
import {SearchPageComponent} from './pages/search-page/search-page.component';
import {SearchFormComponent} from './components/search-form/search-form.component';
import {SliderComponent} from './components/slider/slider.component';
import {SearchResultComponent} from './components/search-result/search-result.component';
import {FlightDetailBoxComponent} from './components/flight-detail-box/flight-detail-box.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {SliderModule} from 'primeng/components/slider/slider';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {FlightSearchServiceService} from './shared/services/flight-search-service.service';

describe('AppComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent,
                SearchPageComponent,
                SearchFormComponent,
                SliderComponent,
                SearchResultComponent,
                FlightDetailBoxComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                HttpModule,
                SliderModule,
                AppRoutingModule,
                ReactiveFormsModule,
                RouterTestingModule
            ],
            providers: [FlightSearchServiceService]
        })
        ;
    });

    it('should create the app', async(() => {
        let fixture = TestBed.createComponent(AppComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it(`should have as title 'app works!'`, async(() => {
        let fixture = TestBed.createComponent(AppComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app.title).not.toBeDefined()
    }));


});
