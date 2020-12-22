import { browser, by, element } from 'protractor';
import { HomePage } from './home.po';

describe('Home Page',()=>{
  let page: HomePage;

  beforeAll(()=>{
    page = new HomePage();
  })

  it('should find the "Start here" buttom',()=>{
    page.navigateTo();
    page.clickStartHere();
    expect(browser.getCurrentUrl())
        .toEqual(browser.baseUrl + 'home#login');
  })
})
