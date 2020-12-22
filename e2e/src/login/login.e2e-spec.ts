import { browser } from 'protractor';
import { LoginPage } from './login.po';
describe('Login tests --', () => {
    let page: LoginPage;
    beforeAll(() => {
        page = new LoginPage();
        page.navigateTo();
    });
/*     it('Login form should be valid', async() => {
      await page.getEmailTextbox().sendKeys('raul@mail.com');
      await page.getPasswordTextbox().sendKeys('123456');
      expect(page.getSubmitButton().isEnabled).toBeTruthy();

     }); */
     it('submit form with valid credentials',async ()=>{
      await page.getEmailTextbox().sendKeys('john@email.com');
      await page.getPasswordTextbox().sendKeys('123456');
      await page.getForm().submit();
      
     /*  page.waitForRedirect(); */
      let url = await browser.getCurrentUrl();
      expect(url).toContain('profile');

     })
});
