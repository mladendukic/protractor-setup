let BasePage = function() {

  let EC = protractor.ExpectedConditions;

  this.stabilize = (elm, maxtime, sleeptime) => {
    browser.wait(EC.elementToBeClickable(elm), maxtime).then(browser.sleep(sleeptime));
  };

  this.clickElement = (elm) => {
    elm.click();
  };

  this.ifElementIsClickable = (elm) => {
    browser.wait(EC.elementToBeClickable(elm), 15000);
  };

  this.clickElementIfClickable = (elm) => {
    browser.wait(EC.elementToBeClickable(elm), 15000);
    elm.click();
  };

  this.ifElementIsDisplayed = (elm) => {
    browser.wait(EC.visibilityOf(elm), 15000);
  };

  this.ifElementIsPresent = (elm) => {
    browser.wait(EC.presenceOf(elm), 15000);
  };

  this.ifTextIsDisplayed = (elm, phrase) => {
    browser.wait(EC.textToBePresentInElement((elm), phrase), 15000);
  };

};

module.exports = BasePage;