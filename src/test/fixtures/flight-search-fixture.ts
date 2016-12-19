export class FlightSearchFixture {
    public searchResults: any;

    constructor() {
        this.searchResults = JSON.parse(resultStr);

    }

    public getResults() {
        return this.searchResults;
    }
}

/* tslint:disable */
const resultStr: string = `
       [ {"departDate": "2015-06-09",
        "returnDate" : "2015-07-15",
        "flights":[
            {
                "price": 100,
                "airlineId": "UN",
                "flight_number": "UN-571",
                "fromCity": "SYD",
                "destinationCity": "MEL",
                "passengers": "1",
                "departTime" : "10.00AM",
                "arriveTime" : "12.30PM"
            },
             {
                "price": 500,
                "airlineId": "TA",
                "flight_number": "TA-71",
                "fromCity": "SYD",
                "destinationCity": "KLA",
                "passengers": "2",
                 "departTime" : "10.00AM",
                "arriveTime" : "12.30PM"
            },
             {
                "price": 2000,
                "airlineId": "AI",
                "flight_number": "AI51",
                "fromCity": "MEL",
                "destinationCity": "DEL",
                "passengers": "4",
                 "departTime" : "10.00AM",
                "arriveTime" : "12.30PM"
            },
             {
                "price": 1500,
                "airlineId": "AI",
                "flight_number": "AI51",
                "fromCity": "MEL",
                "destinationCity": "DEL",
                "passengers": "4",
                 "departTime" : "10.00AM",
                "arriveTime" : "12.30PM"
            },
             {
                "price": 3000,
                "airlineId": "AI",
                "flight_number": "AI51",
                "fromCity": "MEL",
                "destinationCity": "DEL",
                "passengers": "4",
                 "departTime" : "10.00AM",
                "arriveTime" : "12.30PM"
            }
        ]
        }]
        `
    ;
