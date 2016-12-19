/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FlightDetailBoxComponent} from './flight-detail-box.component';

describe('FlightDetailBoxComponent', () => {
    let component: FlightDetailBoxComponent;
    let fixture: ComponentFixture<FlightDetailBoxComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FlightDetailBoxComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {

        /* "price": 2000,
         "airlineId": "AI",
         "flight_number": "AI51",
         "fromCity": "MEL",
         "destinationCity": "DEL",
         "passengers": "4",
         "departTime" : "10.00AM",
         "arriveTime" : "12.30PM"*/
        fixture = TestBed.createComponent(FlightDetailBoxComponent);
        component = fixture.componentInstance;
        // let comp = fixture.componentInstance;

        // let expectedComp = new FlightDetailBoxComponent();
        component.arriveTime = "12.30PM";
        component.departTime = "10.00AM";
        component.flight_number = "AI151";
        component.fromCity = "DEL";
        component.destinationCity = "SYD";
        fixture.detectChanges();
    });

    it('should create', () => {
        // expect(component).toBeTruthy();
        // console.log(component)
        expect(component.arriveTime).toBeTruthy("12.30PM");
        expect(component.departTime).toBeTruthy("10.00AM");
        expect(component.flight_number).toBeTruthy("AI151");
        expect(component.fromCity).toBeTruthy("DEL");
        expect(component.destinationCity).toBeTruthy("SYD");
    });
});
