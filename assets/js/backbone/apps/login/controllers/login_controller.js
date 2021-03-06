var $ = require('jquery');
window.jQuery = $; 

var _ = require('underscore');
var Backbone = require('backbone');
var Bootstrap = require('bootstrap');
var BaseController = require('../../../base/base_controller');
var LoginView = require('../views/login_view');
var LoginCreateView = require('../views/login_create_view');
var LoginForgotView = require('../views/login_forgot_view');
var login = require('../../../config/login.json');

var LoginController = BaseController.extend({

  events: {
    'click #register-cancel': 'renderLogin',
    'click #login-register': 'renderRegister',
    'click #forgot-done-cancel': 'renderLogin',
    'click #forgot-cancel': 'renderLogin',
    'click #forgot-password': 'renderForgot',
  },

  initialize: function (options) {
    this.options = options;
    this.cleanupViews();
    this.renderLogin();
  },

  cleanupViews: function () {
    if (this.loginView) {
      this.loginView.cleanup();
    }
    if (this.loginCreateView) {
      this.loginCreateView.cleanup();
    }
    if (this.loginForgotView) {
      this.loginForgotView.cleanup();
    }
  },

  renderLogin: function () {
    var self = this;
    this.cleanupViews();
    this.loginView = new LoginView({
      el: '#container',
      login: login,
      message: this.options.message,
    }).render();
  },

  renderRegister: function () {
    var self = this;
    this.cleanupViews();
    this.loginCreateView = new LoginCreateView({
      el: '#container',
      login: login,
      message: this.options.message,
    }).render();
  },

  renderForgot: function () {
    var self = this;
    this.cleanupViews();
    this.loginForgotView = new LoginForgotView({
      el: '#container',
      login: login,
      message: this.options.message,
    }).render();
  },
});

module.exports = LoginController;
