import {Component, OnInit, ViewEncapsulation, EventEmitter, Output, Input, SimpleChanges} from '@angular/core';
import any = jasmine.any;

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SliderComponent implements OnInit {

    @Output() priceRangeChanged = new EventEmitter<any>();
    @Input() fareRange;
    public rangeValues: number[];
    public minRange: number;
    public maxRange: number;

    constructor() {
        this.minRange = 0;
        this.maxRange = 100;
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes["fareRange"] && changes["fareRange"].currentValue.length) {
            this.rangeValues = changes["fareRange"].currentValue;
            // this.minRange = changes["fareRange"].currentValue[0];
            this.maxRange = changes["fareRange"].currentValue[1];
        }
    }

    public onSliderChange() {
        console.log("slider chane", this.rangeValues);
        this.priceRangeChanged.emit(this.rangeValues);
    }

}
