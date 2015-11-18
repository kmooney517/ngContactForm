import angular from 'angular';
import 'angular-ui-router';

import config from './config';

import PARSE from './constants/parse.constant';

import HomeController from './controllers/homeController';
import SubmissionController from './controllers/submissionController';
import HomeService from './services/homeService';
import SubmissionService from './services/submissionService';

angular
  .module('app', ['ui.router'])
  .config(config)
  .constant('PARSE', PARSE)
  .controller('HomeController', HomeController)
  .controller('SubmissionController', SubmissionController)
  .service('HomeService', HomeService)
  .service('SubmissionService', SubmissionService)
;
