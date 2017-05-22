import { DiamondsPage } from './app.po';

describe('diamonds App', () => {
  let page: DiamondsPage;

  beforeEach(() => {
    page = new DiamondsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
