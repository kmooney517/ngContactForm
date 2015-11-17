import angular from 'angular';
import 'angular-ui-router';

import config from './config';

import PARSE from './constants/parse.constant';

import HomeController from './controllers/homeController';
import HomeService from './services/homeService';

angular
  .module('app', ['ui.router'])
  .config(config)
  .constant('PARSE', PARSE)
  .controller('HomeController', HomeController)
  .service('HomeService', HomeService)
;
