export class RegisterPageObject {

  private form;
  private nameInput;
  private emailInput;
  private passwordInput;
  private repeatPasswordInput;
  private submitButton;
  private goToForgotPasswordLink;
  private goToLoginLink;

  constructor() {

    // get the relevant elements
    this.form = element(by.id('register-form'));
    this.nameInput = this.form.element(by.id('register-name'));
    this.emailInput = this.form.element(by.id('register-email'));
    this.passwordInput = this.form.element(by.id('register-password'));
    this.repeatPasswordInput = this.form.element(by.id('register-repeat-password'));
    this.submitButton = this.form.element(by.id('register-submit'));

    this.goToForgotPasswordLink = element(by.id('register-forgot-password-link'));
    this.goToLoginLink = element(by.id('register-login-link'));

  }

  setName(value: string) {
    return this.nameInput.clear().sendKeys(value);
  }

  setEmail(value: string) {
    return this.emailInput.clear().sendKeys(value);
  }

  setPassword(value: string) {
    return this.passwordInput.clear().sendKeys(value);
  }

  setRepeatPassword(value: string) {
    return this.repeatPasswordInput.clear().sendKeys(value);
  }

  submitForm() {
    return this.submitButton.sendKeys(protractor.Key.ENTER);
  }

  getAllErrorMessages() {
    return element.all(by.css('.error-group'));
  }

  hasErrorMessages() {
    return this.getAllErrorMessages().count().then(value => {
      return value > 0;
    });
  }

  formIsValid(){
    return this.getAllErrorMessages().count().then(value => {
      return value === 0;
    });
  }

}
