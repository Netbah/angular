import { browser, element, by } from 'protractor';

export class HighlightGenderPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('gender-root h1')).getText();
  }
}
