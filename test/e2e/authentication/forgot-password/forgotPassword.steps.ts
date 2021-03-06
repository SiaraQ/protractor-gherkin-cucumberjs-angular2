let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

import {ForgotPasswordPageObject} from './forgotPassword.page';
import {LoginPageObject} from '../login';
import {AuthenticationPageObject} from '../authentication.page';

module.exports = function () {
  
  let authenticationModule = new AuthenticationPageObject();
  let loginPageObject = new LoginPageObject();
  let forgotPasswordPageObject = new ForgotPasswordPageObject();

  this.setDefaultTimeout(60 * 1000);

  this.Given(/^user clicks the forgot password link$/, (callback) => {
    authenticationModule.goToLogin();
    loginPageObject.navigateToForgotPasswordPage();
    callback();
  });

  this.Given(/^'(.*)' is the user email used in the forgot password form$/, function (email, callback) {
    forgotPasswordPageObject.setEmail(email);
    callback();
  });

  this.When(/^submitting the forgot password form$/, (callback) => {
    forgotPasswordPageObject.submitForm();
    callback();
  });

  this.Then(/^the forgot password form is validated '(.*)'$/, function (valid, callback) {
    valid = valid === 'true';
    expect(forgotPasswordPageObject.formIsValid()).to.become(valid).and.notify(callback);
  });


};
