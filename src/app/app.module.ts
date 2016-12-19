import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {SliderComponent} from './components/slider/slider.component';
import {SearchResultComponent} from './components/search-result/search-result.component';
import {FlightDetailBoxComponent} from './components/flight-detail-box/flight-detail-box.component';
import {SearchPageComponent} from './pages/search-page/search-page.component';
import {SearchFormComponent} from './components/search-form/search-form.component';
import {SliderModule} from 'primeng/components/slider/slider';
import {FlightSearchServiceService} from './shared/services/flight-search-service.service';

import {APP_BASE_HREF} from '@angular/common';

// @NgModule({
//     declarations: [AppComponent],
//     imports: [routing /* or RouterModule */],
//     providers: [{provide: APP_BASE_HREF, useValue : '/' }]
// ]);

@NgModule({
    declarations: [
        AppComponent,
        SearchFormComponent,
        SliderComponent,
        SearchResultComponent,
        FlightDetailBoxComponent,
        SearchPageComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        SliderModule,
        ReactiveFormsModule
    ],
    providers: [FlightSearchServiceService,
        {provide: APP_BASE_HREF, useValue: '/'}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
