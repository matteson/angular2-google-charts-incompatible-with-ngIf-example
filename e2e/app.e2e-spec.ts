import { ReproducePage } from './app.po';

describe('reproduce App', function() {
  let page: ReproducePage;

  beforeEach(() => {
    page = new ReproducePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
