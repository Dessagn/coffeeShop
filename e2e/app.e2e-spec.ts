import { CoffeeShopPage } from './app.po';

describe('coffee-shop App', () => {
  let page: CoffeeShopPage;

  beforeEach(() => {
    page = new CoffeeShopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
