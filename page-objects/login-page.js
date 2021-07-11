let LoginPage = function() {

    this.emailField = $('#Email');
    this.passwordField = $('#Password');
    this.loginButton = $('.button-1.login-button');
    this.logIn = (username, password) => {
      this.emailField.sendKeys(username);
      this.passwordField.sendKeys(password);
      this.loginButton.click();
    };
    
  };
  
  module.exports = LoginPage;