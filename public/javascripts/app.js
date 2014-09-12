/**
 * Created by conor on 23/08/2014.
 */


// Declare app level module which depends on filters, and services
angular.module('portfolioSite', [
    'ngRoute',
    //'portfolioSite.filters',
    'portfolioSite.services',
    //'portfolioSite.directives',
    'portfolioSite.controllers'
]).
    config(['$routeProvider', function ($routeProvider) {

        'use strict';

        $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeController', title: 'Home'});
        $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'AboutController', title: 'About Me'});
        $routeProvider.when('/projects', {templateUrl: 'partials/projects.html', controller: 'ProjectsController', title: 'Projects'});
        $routeProvider.when('/projects/:projectName', {templateUrl: 'partials/project.html', controller: 'ProjectController', title: 'Project'});
        $routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: 'ContactController', title: 'Contact Me'});
        $routeProvider.when('/cv', {templateUrl: 'partials/cv.html', controller: 'CvController', title: 'CV'});
        $routeProvider.otherwise({redirectTo: '/home'});
    }])

    .run(function ($rootScope) {

        'use strict';

        $rootScope.$on("$routeChangeSuccess", function (event, currentRoute, previousRoute) {
            $rootScope.title = currentRoute.title;
        });
    });

