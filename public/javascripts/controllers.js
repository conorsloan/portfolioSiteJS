/**
 * Created by conor on 23/08/2014.
 */

'use strict';
/* Page Controllers */
var pageControllers = angular.module('portfolioSite.controllers', []);

pageControllers.controller('HomeController', ['$scope', function($scope) {
    console.log('Controller: Home');
}]);
pageControllers.controller('AboutController', ['$scope', function($scope) {
    console.log('Controller: About');
}]);
pageControllers.controller('ProjectsController', ['$scope', function($scope) {
    console.log('Controller: Projects');
}]);
pageControllers.controller('ProjectController', ['$scope', function($scope) {
    console.log('Controller: Project');
}]);
pageControllers.controller('CvController', ['$scope', function($scope) {
    console.log('Controller: CV');
}]);
pageControllers.controller('ContactController', ['$scope', function($scope) {
    console.log('Controller: Contact');
}]);




/** Function representing standalone header controller **/
function HeaderController($scope, $location)
{
    // Allow correct navbar item to be selected
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

    // Get projects from the project service and set to scope: (hardcoded for now)
    $scope.projects = [{name: "Cool Project", uri: "projects/coolproj"},
        {name: "Awesome Project", uri: "projects/awesome"},
        {name: "Sick Project", uri: "projects/sickproj"}];
}