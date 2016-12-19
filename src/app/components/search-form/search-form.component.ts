import {Component, OnInit, Inject, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FlightSearchServiceService} from '../../shared/services/flight-search-service.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-search-form',
    templateUrl: './search-form.component.html',
    styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
    public isOneWayTrip: boolean;
    public flightSearchForm: FormGroup;
    private searchSub: Subscription;

    @Output() searchResult = new EventEmitter<any>();

    constructor(@Inject(FormBuilder) fb: FormBuilder,
                private flightSearchServiceService: FlightSearchServiceService) {
        this.isOneWayTrip = false;

        this.flightSearchForm = fb.group({
            from: ['Delhi', Validators.required],
            destination: ['Sydney', Validators.required],
            departureDate: ['01/ 08/ 2017', Validators.required],
            returnDate: ['02/ 25/ 2017'],
            passengers: ['3', Validators.required]
        });
    }

    ngOnInit() {
    }

    public handleOneWayTrip() {
        this.isOneWayTrip = true;
    }

    public handleReturnTrip() {
        this.isOneWayTrip = false;
    }

    public doSearch() {
        if (this.searchSub) {
            this.searchSub.unsubscribe();
        }
        // console.log("doSearch called");
        // console.log(this.flightSearchForm.value);
        this.searchSub = this.flightSearchServiceService.searchFlights(this.flightSearchForm.value).subscribe((data: any) => {
            console.log("data", data);
            this.searchResult.emit(data);
        });

    }

}
