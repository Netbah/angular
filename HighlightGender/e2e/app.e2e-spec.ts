import { HighlightGenderPage } from './app.po';

describe('highlight-gender App', () => {
  let page: HighlightGenderPage;

  beforeEach(() => {
    page = new HighlightGenderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('gender works!');
  });
});
