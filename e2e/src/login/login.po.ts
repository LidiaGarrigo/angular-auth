import { browser, by, element, protractor } from 'protractor';

export class LoginPage {
  navigateTo() {
    return browser.get('/login') as Promise<any>;
  }

  getEmailTextbox() {
    return element(by.css("input[formControlName=email]"));
  }
  getPasswordTextbox() {
    return element(by.css("input[formControlName=password]"));
  }

  getForm() {
    return element(by.tagName('form'));
  }

  getSubmitButton() {
    return element(by.tagName('button'));
  }
/*
  waitForRedirect() {
    let EC = protractor.ExpectedConditions;
    return browser.wait(EC.urlContains('profile'), 2000);
} */
}
