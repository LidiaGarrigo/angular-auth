import { browser, by, element } from 'protractor';

export class HomePage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  clickStartHere() {
    element(by.buttonText('Start here')).click();
  }

}
