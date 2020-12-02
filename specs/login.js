let BasePage = require('../../page-objects/base-page');
let LoginPage = require('../../page-objects/login-page');

describe('nopCommerce Log In form', function() {

    let base = new BasePage();
    let login = new LoginPage();

    beforeAll(function() {
      browser.waitForAngularEnabled(false);
      browser.get('https://demo.nopcommerce.com/');
    });
  
    it('should have a title', function() {
      expect(browser.getTitle()).toEqual('nopCommerce demo store');
    });
  
    it('should click on Log In button', function() {
      logInButton.click();
      expect(email.isDisplayed()).toBe(true);
      email.sendKeys('test@test.com');
      browser.sleep(10000);
    });

    // it('Validate something', ()=> {
    //   someElement.click();
    //   browser.wait(EC.visibilityOf(otherElement),29000);
    //   expect(otherElement.getText()).toBe('SomeText');
    // })
  });