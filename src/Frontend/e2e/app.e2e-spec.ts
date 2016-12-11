import { CoreAnguPage } from './app.po';

describe('core-angu App', function() {
  let page: CoreAnguPage;

  beforeEach(() => {
    page = new CoreAnguPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
