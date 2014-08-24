/**
 * Created by conor on 23/08/2014.
 */

'use strict';
// Declare app level module which depends on filters, and services
angular.module('portfolioSite', [
    'ngRoute',
    //'portfolioSite.filters',
    //'portfolioSite.services',
    //'portfolioSite.directives',
    'portfolioSite.controllers'
]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeController'});
        $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'AboutController'});
        $routeProvider.when('/projects', {templateUrl: 'partials/projects.html', controller: 'ProjectsController'});
        $routeProvider.when('/projects/:projectName', {templateUrl: 'partials/project.html', controller: 'ProjectController'});
        $routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: 'ContactController'});
        $routeProvider.when('/cv', {templateUrl: 'partials/cv.html', controller: 'CvController'});
        $routeProvider.otherwise({redirectTo: '/home'});
    }]);