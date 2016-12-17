import { FlightSearchAppPage } from './app.po';

describe('flight-search-app App', function() {
  let page: FlightSearchAppPage;

  beforeEach(() => {
    page = new FlightSearchAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
