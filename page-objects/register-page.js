let RegisterPage = function() {

    this.firstNameField = $('#FirstName');
    this.lastNameField = $('#LastName');
    this.emailField = $('#Email');
    this.passwordField = $('#Password');
    this.confirmPasswordField = $('#ConfirmPassword');
    this.registerButton = $('#register-button');
    this.registerResult = $('.result');
    this.register = (firstName, lastName, email, password) => {
      this.firstNameField.sendKeys(firstName);
      this.lastNameField.sendKeys(lastName);
      this.emailField.sendKeys(email);
      this.passwordField.sendKeys(password);
      this.confirmPasswordField.sendKeys(password);
      this.registerButton.click();
    };
    
  };
  
  module.exports = RegisterPage;