let LoginPage = function() {

    this.popupTitle = $('.popup-title');
    this.backButton = $('.popup-head__back-button');
    this.logIn = (username, password) => {
      this.usernameField.sendKeys(username);
      this.passwordField.sendKeys(password);
      this.formLoginButton.click();
    };
    
  };
  
  module.exports = LoginPage;