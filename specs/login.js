let BasePage = require('../page-objects/base-page');
let HeaderPage = require('../page-objects/header-page');
let RegisterPage = require('../page-objects/register-page');
let LoginPage = require('../page-objects/login-page');

describe('Should register new user and log in successfully', function() {

    let base = new BasePage();
    let header = new HeaderPage();
    let register = new RegisterPage();
    let login = new LoginPage();

    let email = 'm.dukic6@levi9.com';

    beforeAll(function() {
      browser.waitForAngularEnabled(false);
      browser.driver.manage().window().maximize();
      browser.get('https://demo.nopcommerce.com/');
    });
  
    it('Should have a correct title', function() {
      expect(browser.getTitle()).toEqual('nopCommerce demo store');
    });

    it('Should register new user', function() {
      base.ifElementIsDisplayed(header.registerLink);
      header.registerLink.click();
      register.register('Mladen', 'Dukic', email, 'P@$5w0rD');
      base.ifElementIsDisplayed(register.registerResult);
      expect(register.registerResult.getText()).toBe('Your registration completed');
    });
  
    it('Should log in successfully', function() {
      base.ifElementIsDisplayed(header.logoutLink);
      header.logoutLink.click();
      base.ifElementIsDisplayed(header.loginLink)
      header.loginLink.click();
      base.ifElementIsDisplayed(login.emailField);
      login.logIn(email, 'P@$5w0rD');
      expect(header.myAccountLink.isDisplayed()).toBe(true);
      browser.sleep(5000);
    });

  });