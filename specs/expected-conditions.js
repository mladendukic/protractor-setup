let EC = protractor.ExpectedConditions;

describe('nopCommerce Log In form', function() {

  let logInLink = element(by.className('ico-login'));
  let emailInput = element(by.id('Email'));
  let passwordInput = element(by.id('Password'));
  let logInButton = element(by.css('.button-1.login-button'));
  let myAccountLink = element(by.className('ico-account'));

  beforeAll(function() {
    browser.waitForAngularEnabled(false);
    browser.driver.manage().window().maximize();
    browser.get('https://demo.nopcommerce.com/');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('nopCommerce demo store');
  });

  it('should Log In', function() {
    // browser.wait(EC.elementToBeClickable(logInButton), 15000);
    browser.wait(EC.elementToBeClickable(logInLink));
    logInLink.click();
    browser.sleep(500);
    emailInput.sendKeys('m.dukic@levi9.com');
    browser.wait(EC.textToBePresentInElementValue((emailInput),'m.dukic@levi9.com'), 15000);
    passwordInput.sendKeys('P@$5word');
    browser.wait(EC.elementToBeClickable(logInButton), 15000); //in this case, it is always clickable :/
    logInButton.click();
    browser.wait(EC.visibilityOf(myAccountLink), 15000);
    expect(myAccountLink.isDisplayed()).toBe(true);
    browser.sleep(5000)
  });
});